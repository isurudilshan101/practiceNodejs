var express=require('express');
var app=express();
var mysql=require('mysql'); 
var handlebars=require('express-handlebars');
var bodyparser=require('body-parser');
app.use(bodyparser());
var con;
app.engine('handlebars',handlebars({defaultLayout:'main'}));
app.set('view engine','handlebars');
app.get('/',function(req,res){
    
    
    con.query("SELECT * FROM student1",function(err,result){
        if(err) throw err;
        console.log(result);
        res.render('student',{
            result:result
        });
    
    });



});

app.post('/deleteuser',function(req,res){
    var ino=req.body.IndexNo;
    con.query("DELETE FROM student1 WHERE IndexNO="+ino+";",function(err,result){
        if(err) throw err;
        console.log(err);
    })
});

app.listen(5000,function(){
     con=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'test'
    });

    console.log('listing to port 5000');
});