// var express=require('express');
// var app=express();
//  var fs=require('fs');
// var path=require('path');
// var bodyparser=require('body-parser');
// app.use(bodyparser());


// app.use('/mycssfiles',express.static(__dirname+'/css'));

// app.get("/",function(request,responce){
//     responce.sendFile('home.html',{root:__dirname});
//     // responce.end("my name is "+JSON.stringify(request.query.name));
// });

// app.post("/user",function(request,responce){
//     // responce.sendFile('home.html',{root:__dirname});
//     responce.end("my name is "+JSON.stringify(request.body.firstname)+" "+ JSON.stringify(request.body.lastname));
// });



// app.get(/^(.+)/,function(request,responce){
  

//     try{
//             if(fs.statSync(path.join(__dirname,'views',request.params[0]+'.html'))){
//                 responce.sendFile(request.params[0]+'.html',{root:path.join(__dirname,'views')});
//             }
//     }
//     catch(error){

//         responce.sendFile('404.html',{root:path.join(__dirname,'views')});

//     }

// });



// app.listen(5000,function(){
//     console.log("server done");
// });