const router = require('express').Router();
const { User, Post } = require('../../models')


router.get('/dashboard', (req, res) => {
  
    res.render('dashboard')
});

router.get('/homepage', async (req, res) => {

    const postData = await Post.findAll({
        attributes:[ 'poster', 'post_title', 'post_content', 'user_id']
    });
    const returnedPostData = postData.map((post) => post.get({plain: true}));
    res.render('homepage', {returnedPostData})

});



router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/signup',(req, res) => {
    res.render('signup')
})


router.get('/dashboard/:id', async (req, res) => {
    const userData = await User.findByPk(req.params.id, {
        attributes: ['user_name', 'email']
    });

    console.log(userData);

    const actualUserData= userData.get({plain: true})
    console.log( actualUserData)
    res.render('dashboard', {actualUserData})
});


router.post('/dashboard/id', async (req, res) => {
    

  const{ post_title:postTitle,
        post_content:postContent,
        poster:postPoster} = req.body;

        const postData = await Post.create({
            post_title: postTitle,
            post_content: postContent,
            poster: postPoster,
        });
        res.json(postData);
});

module.exports = router;