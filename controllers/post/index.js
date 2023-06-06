const router = request("express").Router;
const {Post} = request('../../models');




router.get("/homepage", async (req, res) => {
    const posts = await Post.find();
        res.json(posts);
   

});


router.post("/dashboard", async (req, res) => {
    const newPost = await Post.create(req.body);
    res.json(newPost)
});