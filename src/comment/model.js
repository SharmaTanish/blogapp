const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
    {
        comment:String,
        user_id:{type:mongoose.Schema.typeOf.ObjectId, ref:"User"},
        blog_id:{type:mongoose.Schema.typeOf.ObjectId, ref:"Blog"},
    }
    ,
    {
        timestamp:true,
    }
)

const Comment = mongoose.model("Comment",commentSchema);
module.exports={Comment};