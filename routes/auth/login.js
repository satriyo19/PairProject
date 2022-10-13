const express = require('express')
const UserController = require('../../controllers/userController')
const router = express.Router()

router.get('/', UserController.renderLogin)
router.post('/', UserController.handlerLogin)





module.exports = router