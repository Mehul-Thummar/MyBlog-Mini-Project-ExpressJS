const express = require("express");
const blogRoutes = express.Router();
const {
    blog,
    createBlog,
    getAllBlog,
    
} = require("../controller/blog.controller");
const { verifyToken } = require("../helpers/verifyToken");

blogRoutes.get("/getblog", blog);
blogRoutes.post("/newblog", verifyToken, createBlog);
blogRoutes.get("/allblog", verifyToken, getAllBlog);

module.exports = blogRoutes;