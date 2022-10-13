const { application } = require('express')
const express = require('express')
const { renderPost } = require('../../controllers/postController')
const router = express.Router()
const PostController = require('../../controllers/postController')

router.get('/', PostController.renderPost)
router.get('/add', PostController.renderAddPost)
router.post('/add', PostController.addPostHandler)
router.post('/:id/edit', PostController.renderEditPost)
router.post('/:id/delete', PostController.deletePosts)

module.exports = router