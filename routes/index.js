const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.redirect('/login')
})

const login = require('./login')
router.use('/login', login)



module.exports = router