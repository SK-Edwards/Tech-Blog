const router = require('express').Router();
const User = require('../../models/User');

// localhost:3001/user
// get request

router.get("/", (req, res) => {

    User.findAll({attributes:['id', 'user_name', 'password', 'email']}).then((userData) => {
    res.json(userData)
    });
});

// post request for adding new user
// localhost:3001/user/sign-up

router.post("/sign-up", (req,res) => {
   
        User.create({
        user_name: req.body.user_name,
        password: req.body.password,
        email: req.body.email
    })
    .then((userData) => {
        
    res.json(userData);
})
.catch((err) =>{
    console.log(err);
    res.json(err)
})
 });




module.exports = router;