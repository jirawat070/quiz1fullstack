var express = require('express');
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
//app.use(express.static ('static') );
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
        
    });

    app.get('/about', function(req, res) {
        var name = ['BUBBLE'];
        var hobbies = ['Music','Movie','Programming'];
        var bdate ='27/03/1997';
        res.render('pages/about',{fullname : name, hobbies:hobbies,bdate: bdate});
            
        });
    //Display all products
        app.get('/products', function(req, res) {
            var id = req.param('id');
            var sql='select* from products';
                if(id){
                    sql += ' where id ='+id;
                }
           db.any(sql)
            .then(function(data){
                console.log('DATA:'+data);
                res.render('pages/products',{products: data})
                
            })
            .catch(function(error){
                console.log('ERROR:'+error);
            })

        });
   //Display all user
            app.get('/users/:id', function(req, res) {
                var id = req.param('id');
                var sql='select* from users';
                if(id){
                    sql += ' where id ='+id;
                }
                db.any(sql)
                 .then(function(data){
                     console.log('DATA:'+data);
                     res.render('pages/users',{users: data})
                     
                 })
                 .catch(function(error){
                     console.log('ERROR:'+error);
                 })
     
                 });

  console.log('Appp is running at http://localhost:8080');          

app.listen(8080);
