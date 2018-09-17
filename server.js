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

connection.query('SELECT * from students', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows)
})

connection.end();

app.get('/students', function(req, res) {
    var id = req.param('sid');
    var sql='select* from students';
        if(sid){
            sql += ' where id ='+sid;
        }
   db.any(sql)
    .then(function(data){
        console.log('DATA:'+data);
        res.render('pages/students',{students: data})
        
    })
    .catch(function(error){
        console.log('ERROR:'+error);
    })

});




console.log('Appp is running at http://localhost:8085');          

app.listen(8085);
