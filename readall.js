var Connection = require('tedious').Connection;
var Request = require('tedious').Request;


// Create connection to database
var config = {
  userName: 'abc',
  password: 'pass123',
  server: 'localhost',
  options: {
      database: 'bootcamp'
  }
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
        "SELECT * FROM participant",
        function(err, rowCount, rows) {
            console.log(rowCount + ' row(s) returned');
        }
    );

    var results = [];
    request.on('row', function(columns) {
        results.push(columns);
    });

    request.on('doneProc', function(){
      console.log("Querying is done...");
      for (idx in results){
        console.log(results[idx][0].value.toString()+" "+results[idx][1].value);
      }
      process.exit();
    })

    connection.execSql(request);
}