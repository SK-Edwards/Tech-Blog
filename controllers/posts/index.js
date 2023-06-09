const router = require('express').Router();
const { Post, User } = require('../../models');


router.get('/', async (req,res) => {
    const posts = await User.findAll();
    res.json(posts);
});


router.post('/', async (req,res) => {
    try{
    const post = await Post.create({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        poster: req.body.poster,
    })
    res.json(post)
} catch (err) {
    res.status(500).json(err)
}
});


module.exports = router;