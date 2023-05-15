const express = require('express');
const controllers = require('./controllers')
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();
const models = require('./models')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(controllers);





sequelize.sync({force: false}).then(() => {
     app.listen(PORT, () => {
       console.log('LETS GET TO WORK');
  })
})
 