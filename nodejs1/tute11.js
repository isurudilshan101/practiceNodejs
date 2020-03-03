var express=require('express');
var app=express();
var bodyparser=require('body-parser');

app.use(bodyparser());

app.get('/',function(req,res){
    res.sendFile('login.html',{root:__dirname})
});

app.post('/login',function(req,res){
    if(req.body.username=='admin' && req.body.password=='admin')
    {
    res.end("Welcome admin");
    }
    else
    {
        res.removeHeader('invalid');
    }
});


app.listen(5000,function(){
    console.log('server is ok');
});