const mongoose = require('mongoose');
let postSchema=new mongoose.Schema({
    
     name :{type: String},
    age : {type: String},
    class: {type: String},
    division: {type: String},
    school:{type: String},
    address:{type: String}
})
mongoose.model('Post',postSchema)