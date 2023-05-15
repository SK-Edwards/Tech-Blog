const router = require('express').Router();

//localhost:3001/
router.get('/', (req, res) => {
    res.json('Glad to see you hard at work')
})


module.exports = router;