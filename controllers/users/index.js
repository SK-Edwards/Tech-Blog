const router = require("express").Router();

const { User } = require("../../models");


router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});
//  router.post('/signup', async (req,res) => {
//   const user = await User.create(req.body)
//   res.json(user)
//  })

router.post("/signup", async (req, res) => {

  // const { user_name:userValue, email:emailValue, password:passwordValue } = req.body;
  const userData = await User.create({
      user_name: req.body.user_name,
      password: req.body.password,
      email: req.body.email
      
    });
    res.json(userData);
});

module.exports = router;