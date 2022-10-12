const express = require('express')
const UserController = require('../../controllers/userController')
const router = express.Router()

router.get('/', UserController.renderRegister)
// router.post('/', UserController.handlerRegister)


module.exports = router