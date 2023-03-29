const { SuccessResponse } = require('../../core/handleSuccess.core')
const PostService = require('../../services/post.service')

class PostController {
    createPost = async (req, res, next) => {
        const { post_type } = req.body;
        new SuccessResponse({
            message: 'Create new post success!',
            metadata: await PostService.createPost(post_type, req.body)
        }).send(res)
    }

    getPosts = async (req, res, next) => {
        const { page, limit } = req.query;
        new SuccessResponse({
            message: 'Get posts success!',
            metadata: await PostService.getPosts(page, limit)
        }).send(res)
    }

    getPostById = async (req, res, next) => {
        const { id } = req.params;
        new SuccessResponse({
            message: 'Get post success!',
            metadata: await PostService.getPostById(id)
        }).send(res)
    }

}

module.exports = new PostController()