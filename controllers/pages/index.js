const router = require('express').Router();
const { User } = require('../../models')

router.get('/', (req, res) => {
    res.render('homepage')

});  

// router.get('/dashboard', (req, res) => {
  
//     res.render('dashboard')
// })


router.get('/dashboard/:id', async (req, res) => {
    const userData = await User.findByPk(req.params.id, {
        attributes: ['user_name', 'email']
    });

    console.log(userData);

    const actualUserData= userData.get({plain: true})
    console.log( actualUserData)
    res.render('dashboard', actualUserData)
});




module.exports = router;