const express = require("express");
const { isAuthenticated } = require("../helper/utils");
const {createNewBlog} = require("./controller");

const blogRouter = express.Router();

blogRouter.post("/blog",isAuthenticated, createNewBlog);
//now we will learn ki ek hi url se post,put,delete sab kuch kaise kar sakte hai!

module.exports={blogRouter};