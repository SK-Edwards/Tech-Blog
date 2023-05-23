const express = require('express');
const path = require("path");
const controllers = require('./controllers')
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3001;

const app = express();
const models = require('./models')

// To access public content.
app.use(express.static(path.join(__dirname, 'public')))


// This is needed to make post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// This is needed to use handlebars.
 const hbs = exphbs.create({});

 app.engine('handlebars', hbs.engine);
 app.set('view engine', 'handlebars');

app.use(controllers);




sequelize.sync({force: false}).then(() => {
     app.listen(PORT, () => {
       console.log('LETS GET TO WORK');
  })
})
 