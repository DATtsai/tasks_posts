const Posts = require('../model/posts.js');
const successHandle = require('../successHandle');
const errorHandle = require('../errorHandle');

async function getPosts(req, res) {
    try{
        const posts = await Posts.find({});
        successHandle(res, posts);
    }
    catch(error) {
        errorHandle(res, error);
    }
}
module.exports = getPosts;