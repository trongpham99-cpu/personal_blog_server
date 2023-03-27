const { Post, PostProject, PostBlog, PostWork, PostStory } = require("../models/post.model");
const { BadRequestError } = require("../core/handleError.core")

class PostFactory {
    static createPost(type, payload) {
        switch (type) {
            case "project":
                return new PostProject(payload).createPostProject();
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
}

class Post {
    constructor() {
        this.post_title = post_title;
        this.post_content = post_content;
        this.post_status = post_status;
        this.post_type = post_type;
        this.post_author = post_author;
        this.post_date = post_date;
        this.post_modified = post_modified;
        this.post_name = post_name;
        this.post_excerpt = post_excerpt;
        this.post_category = post_category;
        this.post_tag = post_tag;
        this.post_comment_status = post_comment_status;
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
}

class PostProject extends Post {
    constructor() {

    }

    //create a new post project
    async createPostProject() {
        const PostProject = await PostProject.create(this.post_product_attributes);
        if (!PostProject) throw new BadRequestError("Post project not created");

        const newPost = await super.createPost();
        if (!newPost) throw new BadRequestError("Post not created");

        return newPost;
    }
}

module.exports = PostFactory;