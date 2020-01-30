require('./model/DB.js');
const express = require("express");
const app= express();
const cors= require('cors');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const PostMongo=mongoose.model('Post');
const router= express.Router();
router.get('',(req,res)=>{
    
    PostMongo.find()
    .then((post)=>{ res.status(200).json(
        {message:"postSuccessfully",
        posts:post
 })})
    
})
router.post('',(req,res)=>{
    const rebody=req.body;
let postMongo= new PostMongo(rebody);
console.log(rebody);
postMongo.save()
.then((msg)=>{ res.status(200).json(
    {
        message:"success"
    }
)}
);
})
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/studentlist',router);
module.exports=app;