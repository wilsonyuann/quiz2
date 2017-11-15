var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var Util = require('util');

var config = {
  userName: 'abc',
  password: 'pass123',
  server: 'localhost',
  options: {
      database: 'bootcamp'
}

var connection = new Connection(config);

connection.on('connect', function(err) {
    if (err) {
        console.log(err)
    }
    else{
        queryDatabase()
    }
});

function queryDatabase(){

    console.log('Reading rows from the Table...');

    request = new Request(
        Util.format("SELECT * FROM participant WHERE ID = %d", 2),
        function(err, rowCount, rows) {
            console.log(rowCount + ' row(s) returned');
        }
    );

    request.on('row', function(columns) {
        console.log(columns);
    });

   request.on('doneProc', function(){
      console.log("Querying is done...");
      process.exit(1);
    })

    connection.execSql(request);
}