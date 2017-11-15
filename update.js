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
}

var connection = new Connection(config);

connection.on('connect', function(err) {
    if (err) {
        console.log(err)
    }
    else{
        insertIntoDatabase()
    }
});


function insertIntoDatabase(){

    console.log("Updating an object in database...");

    console.log(Util.format("UPDATE participant SET Username=%s, Email=%s, Phone=%s, Course=%s WHERE ID=%d",
                  "andi",
                  "percobaan@gmail.com",
                  "0812-3456-8999",
                  "Membangun Aplikasi Web dengan PHP dan MySQL",
                  2
              ));

    request = new Request(
        Util.format("UPDATE participant SET Username='%s', Email='%s', Phone='%s', Course='%s' WHERE ID=%d",
                  "andi",
                  "percobaan@gmail.com",
                  "0812-3456-8999",
                  "Membangun Aplikasi Web dengan PHP dan MySQL",
                  2
              ),
        function(err, rowCount, rows) {
            console.log(rowCount + ' row(s) inserted');
    });

    request.on('doneProc', function(){
      console.log("Querying is done...");
      process.exit(1);
    })

    connection.execSql(request);
}