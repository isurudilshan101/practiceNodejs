var express=require('express');
var app=express();

app.use('/mycssfiles',express.static(__dirname+'/css'));

app.get("/",function(request,responce){
    responce.sendFile('home.html',{root:__dirname});
});
app.listen(5000,function(){
    console.log("srecer is up");
});