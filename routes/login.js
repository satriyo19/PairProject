const express = require('express')
const Login = require('../controllers/login')
const router = express.Router()

router.get('/', Login.renderLogin)
router.post('/', Login.handlerLogin)





module.exports = router