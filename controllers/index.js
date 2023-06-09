const router = require('express').Router();
const users = require('./users')
const pages = require('./pages')
const posts = require('./posts')

//localhost:3001/
// router.get('/', (req, res) => {
//     res.json('Glad to see you hard at work')
// })

//localhost:3001/
router.use('/', pages)

//localhost:3001/users
router.use('/users', users)

//localhost:3001/posts
router.use('/posts', posts)

module.exports = router;