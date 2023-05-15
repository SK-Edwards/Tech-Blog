const express = require('express');
const controllers = require('./controllers')
const sequelize = require('./config/connection');
const PORT = 3001
const app = express();
// const models = require('./models')

pp.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(controllers);





sequelize.sync({}).then(() => {
     app.listen(PORT, () => {
       console.log('LETS GET TO WORK');
  })
})
 