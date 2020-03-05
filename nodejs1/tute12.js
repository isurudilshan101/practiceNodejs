var express=require('express');
var app=express();
var mysql=require('mysql'); 
app.get('/',function(req,res){
    var con=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'test1'
    
    });

    con.query("SELECT * FROM student1",function(err,result){
        if(err) throw err;
        console.log(result);
    });

});



app.listen(5000,function(){
    console.log('listing to port 5000');
});