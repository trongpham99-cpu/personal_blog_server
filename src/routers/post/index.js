const express = require('express')
const postController = require('../../controllers/post/index')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router()

router.post('/create', asyncHandler(postController.createPost))
router.get('/get-all', asyncHandler(postController.getPosts))
router.get('/get-by-id/:id', asyncHandler(postController.getPostById))

module.exports = router