const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.redirect('/register')
})

const regist = require('./auth/register')
router.use('/register', regist)

const login = require('./auth/login')
router.use('/login', login)

<<<<<<< HEAD
const loggedIn = function(req, res, next) {
    if(!req.session.userId){
        const error = 'Please Login'
        res.redirect(`/login?error=${error}`)
    }else{
        next()
    }
}
router.use(loggedIn)

const post = require('./rahmat/posts')
=======
const post = require('./homepage/posts')
>>>>>>> 257d2b0566171ea524877183967eade97d263e80
router.use('/posts', post)



module.exports = router