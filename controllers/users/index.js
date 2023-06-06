const router = require("express").Router();

const { User } = require("../../models");


router.get("/signup", async (req, res) => {
  res.render("signup");
});


router.post("/signup", async (req, res) => {
  const user_name = document.getElementById(user_name).value;
  const email =  document.getElementById(email).value;
  const password = document.getElementById(password).value;

  
  const existingUser = await User.findOne({
    where: {
      user_name: user_name,
    },
  });
  if (existingUser) {
    res.render("signup", {
      message: "Username already exists. Please choose another username.",
    });
    return;
  }
 
  const userData = await User.create({
    user_name: user_name,
    email: email,
    password: password
  });
 
  if (userData.user_name) {
    req.session.fullName = userData.user_name; 
  }
  res.redirect("/dashboard");
});


router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});


router.get("/login", (req, res) => {
  res.render("login");
});

//post for login:
router.post("/login", async (req, res) => {
  const user_name = document.getElementById(user_name);
  const email = document.getElementById(email)
  const userData = await User.findOne({
    where: {
      user_name: user_name,
      email: email
    },
  });

  //sets session for the posted username
  if (!userData) {
    res.render("login", {
      message: "Invalid username/password. Please try again.",
    });
    return;
  }
  const validPassword = await userData.checkPassword(req.body.password);
  if (!validPassword) {
    res.render("login", {
      message: "Invalid username/password. Please try again.",
    });
    return;
  }
  req.session.fullName = userData.user_name;
  req.session.userId = userData.id;
  console.log('hi');
  res.redirect(`/dashboard?userId=${userData.id}`);
});


;

module.exports = router;