var Connection = require('tedious').Connection;
var Request = require('tedious').Request;


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

    console.log("Inserting a new object into database...");

    request = new Request(
        "INSERT INTO participant (Username, Email, Phone, Course) OUTPUT INSERTED.Username VALUES ('Kresnagaluh', 'kresnagaluh@gmail.com', '7501234', 'Pelatihan Membuat Game dengan HTML5 dan Construct 2')",
        function(err, rowCount, rows) {
            console.log(rowCount + ' row(s) inserted');
    });

    request.on('doneProc', function(){
      console.log("Insert is done...");
      process.exit(1);
    })

    connection.execSql(request);
}