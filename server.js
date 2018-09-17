var express = require('express');
var app = express();
var mysql = require('mysql');
//app.use(express.static ('static') );
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
        
    });

var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});

connection.connect()

app.get('/students', function(req, res) {
    
    connection.query('SELECT * from students', function (err, rows, fields) {
        if (err) throw err
        res.render('pages/students',{students: rows})
      
        console.log( rows)
      })
      
      connection.end();
      
});

app.get('/subjects', function(req, res) {
    
    connection.query('SELECT * from subjects', function (err, rows, fields) {
        if (err) throw err
        res.render('pages/subjects',{subjects: rows})
      
        console.log( rows)
      })
      
      connection.end();
      
});



console.log('Appp is running at http://localhost:8085');          

app.listen(8085);
