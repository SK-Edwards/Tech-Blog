const router = require('express').Router();


// localhost:3001/user
// get request

router.get('/', (req, res) => {
    res.json('Data from user folder')
});

// post request for adding new user
// localhost:3001/user/sign-up

router.post('/sign-up', async (req,res) => {
    const{user_name, email, password} = req.body;
    const userData = await User.create({
        user_name: user_name,
        email: email,
        password: password
    })
    res.json(userData);
});