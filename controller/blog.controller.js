const Blog = require("../model/blog.model");

exports.blog = (req, res) => {
    res.render('newblog');
}
exports.createBlog = async (req, res) => {
    try {
        let blog = await Blog.findOne({ user: req.user._id, title: req.body.title, isDelete: false });
        if (blog) {
            return res.send({ message: 'Blog Already Existed....' });
        }
        blog = await Blog.create({ user: req.user._id, ...req.body, });
        res.redirect('allblog');
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getAllBlog = async (req, res) => {
    try {
        let blogs = await Blog.find({ user: req.user._id, isDelete: false });

        res.render('allblog', { blogs });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" })
    }
};





