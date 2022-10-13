const { application } = require('express')
const express = require('express')
const { renderPost } = require('../../controllers/postController')
const router = express.Router()
const PostController = require('../../controllers/postController')

router.get('/', PostController.renderPost)
router.get('/add', PostController.renderAddPost)
router.post('/add', PostController.addPostHandler)
<<<<<<< HEAD:routes/rahmat/posts.js
router.post('/:id/delete', PostController.deletePosts)
router.get('/logout', PostController.getLogout)
=======
router.get('/:id/edit', PostController.renderEditPosts)
router.post('/:id/edit', PostController.editPostsHandler)
router.get('/:id/delete', PostController.deletePosts)
>>>>>>> 257d2b0566171ea524877183967eade97d263e80:routes/homepage/posts.js

module.exports = router