const router = require('express').Router();
const users = require('./users')
//localhost:3001/
// router.get('/', (req, res) => {
//     res.json('Glad to see you hard at work')
// })

router.use('/users', users)

module.exports = router;