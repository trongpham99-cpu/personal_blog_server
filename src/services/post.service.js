const { Post, PostProject, PostBlog, PostWork, PostStory } = require("../models/post.model");
const { BadRequestError } = require("../core/handleError.core");
const { PAGE_SIZE, PUBLISH_STATUS } = require("../constants");

class PostFactory {
    static createPost(type, payload) {
        switch (type) {
            case "project":
                return new MPostProject(payload).createPostProject();
            case "blog":
            // return new PostBlog(payload);
            case "work":
            // return new PostWork(payload);
            case "story":
            // return new PostStory(payload);
            default:
                throw new BadRequestError("Post type not supported");
        }
    }

    static getPosts(page, limit) {
        return new MPost({}).getPosts(page, limit);
    }

    static getPostById(id) {
        return new MPost({}).getPostById(id);
    }
}

class MPost {
    constructor(
        {
            post_title,
            post_content,
            post_status,
            post_type,
            post_author,
            post_name,
            post_excerpt,
            post_category,
            post_tag,
            post_attachments,
            post_thumbnail,
            post_category_id,
            post_tag_id,
            post_product_attributes
        }
    ) {
        this.post_title = post_title;
        this.post_content = post_content;
        this.post_status = post_status;
        this.post_type = post_type;
        this.post_author = post_author;
        this.post_name = post_name;
        this.post_excerpt = post_excerpt;
        this.post_category = post_category;
        this.post_tag = post_tag;
        this.post_attachments = post_attachments;
        this.post_thumbnail = post_thumbnail;
        this.post_category_id = post_category_id;
        this.post_tag_id = post_tag_id;
        this.post_product_attributes = post_product_attributes;
    }

    //create a new post
    async createPost() {
        return await Post.create(this);
    }

    //get all posts
    async getPosts(page = 1, limit = PAGE_SIZE) {
        console.log({ page, limit });
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const options = {
            post_status: PUBLISH_STATUS,
        };
        return await Post.find(options).skip(skip).limit(parseInt(limit)).sort({ createdAt: -1 });
    }

    //get post by id
    async getPostById(id) {
        console.log({ id })
        const options = {
            _id: id,
            post_status: PUBLISH_STATUS,
        };
        return await Post.findOne(options);
    }
}

class MPostProject extends MPost {
    //create a new post project
    async createPostProject() {
        const _PostProject = await PostProject.create(this.post_product_attributes);
        if (!_PostProject) throw new BadRequestError("Post project not created");

        const _newPost = await super.createPost();
        if (!_newPost) throw new BadRequestError("Post not created");

        return _newPost;
    }
}

module.exports = PostFactory;