var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var sessions=require('express-session');
var session;


app.use(bodyparser());
app.use(sessions({
    secret:'bgjvkjbcdkvjfkgd4987545'
}));

app.get('/',function(req,res){
    session=req.session;
    if(session.userid){
        res.send("Welcome admin <a href=\>"); 
   
    }
    else 
    res.sendFile('login.html',{root:__dirname});
});

app.post('/login',function(req,res){

    if(req.body.username=='admin' && req.body.password=='admin')
    {
        session=req.session;
        session.userid=req.body.username;
    res.end("Welcome admin"); 
   
    }
    else
    {
        res.end('invalid');
    }
});


app.listen(5000,function(){
    console.log('server is ok');
});