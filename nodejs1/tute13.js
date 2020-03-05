var express=require('express');
var app=express();
var mysql=require('mysql'); 
var con;
app.get('/',function(req,res){
   
    
    });

    con.query("SELECT * FROM student1",function(err,result){
        if(err) throw err;
        console.log(result);


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