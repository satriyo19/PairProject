const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.redirect('/register')
})

const regist = require('./auth/register')
router.use('/register', regist)

const login = require('./auth/login')
router.use('/login', login)



module.exports = router