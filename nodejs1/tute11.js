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
        res.send("Welcome admin <a href=\'logout'>click to logout</a>"); 
   
    }
    else 
    res.sendFile('login.html',{root:__dirname});
});

app.get('/logout',function(req,res){
    req.session.destroy();
    res.redirect('/');
});
app.post('/login',function(req,res){

    if(req.body.username=='admin' && req.body.password=='admin')
    {
        session=req.session;
        session.userid=req.body.username;
        res.send("Welcome admin <a href=\'logout'>click to logout</a>"); 
   
    }
    else
    {
        res.end('invalid');
    }
});


app.listen(5000,function(){
    console.log('server is ok');
});