const mongoose = require("mongoose");

const COLLECTION_NAME = "posts";
const DOCUMENT_NAME = "post";

const postSchema = new mongoose.Schema(
    {
        post_title: { type: String, required: true },
        post_content: { type: String, required: true },
        post_status: { type: String, required: true },
        post_type: { type: String, required: true },
        post_author: { type: String, required: true },
        post_date: { type: Date, required: true },
        post_modified: { type: Date, required: true },
        post_name: { type: String, required: true },
        post_excerpt: { type: String },
        post_category: { type: String, required: true },
        post_tag: { type: String, required: true },
        post_comment_status: { type: String, required: true },
        post_attachments: { type: String, required: true },
        post_thumbnail: { type: String, required: true },
        post_category_id: { type: String },
        post_tag_id: { type: String },
        post_product_attributes: { type: String, required: true },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    }
);

//sub post schema for project
const postProjectSchema = new mongoose.Schema(
    {
        team: { type: String },
        technology: { type: Array },
        project_url: { type: String },
        project_github: { type: String },
        project_image: { type: String },
    },
    {
        timestamps: true,
        collection: 'post_project',
    }
);

//sub post schema for blog
const postBlogSchema = new mongoose.Schema(
    {
        blog_image: { type: String },
    },
    {
        timestamps: true,
        collection: 'post_blog',
    }
);

//sub post schema for work
const postWorkSchema = new mongoose.Schema(
    {
        company_name: { type: String },
        company_logo: { type: String },
        company_url: { type: String },
        company_location: { type: String },
        company_duration: { type: String },
        company_description: { type: String },
        my_position: { type: String },
    },
    {
        timestamps: true,
        collection: 'post_work',
    }
);

//sub post schema for story
const postStorySchema = new mongoose.Schema(
    {
        story_image: { type: String },
    },
    {
        timestamps: true,
        collection: 'post_story',
    }
);

module.exports = {
    Post: mongoose.model(DOCUMENT_NAME, postSchema),
    PostProject: mongoose.model('PostProject', postProjectSchema),
    PostBlog: mongoose.model('PostBlog', postBlogSchema),
    PostWork: mongoose.model('PostWork', postWorkSchema),
    PostStory: mongoose.model('PostStory', postStorySchema),
};