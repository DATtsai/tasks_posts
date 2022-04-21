const Posts = require('../model/posts.js');
const successHandle = require('../successHandle');
const errorHandle = require('../errorHandle');

async function deletPosts(req, res) {
    try{
        const id = req.url.split('/').pop();
        // 刪除全部
        if(!id || id === 'posts') {
            const posts = await Posts.deleteMany({});
            successHandle(res, posts);
        }
        else{ // 刪除單筆
            const posts = await Posts.findByIdAndDelete(id);
            successHandle(res, posts);
        }
    }
    catch(error) {
        errorHandle(res, error);
    }
}
module.exports = deletPosts;