const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentDb',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log("succeess");
    }else{
        console.log(err);
    }
});
require('./post.js');