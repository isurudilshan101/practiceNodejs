var express=require('express');
var app=express();
var router=express.Router();


app.use('/firstrout',router);

router.get('/',function(req,res){
    res.end("this is firstrout root");
});
router.get('/rout1',function(req,res){
    res.end("this is rout1 ");
});
router.get('/rout2',function(req,res){
    res.end("this is rout2 ");
});

app.listen(5000,function(){
    console.log('wooooow')
});