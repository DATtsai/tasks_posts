const Posts = require('../model/posts.js');
const successHandle = require('../successHandle');
const errorHandle = require('../errorHandle');

function patchPosts(req, res) {
    let body = '';
    req.on('data', (chunk)=>{
        body += chunk;    
    });
    req.on('end', async ()=>{
        try{
            const id = req.url.split('/').pop();
            const post = JSON.parse(body);
            // console.log(post);
            if(!post.content) {
                return errorHandle(res, 'content不能為空白');
            }
            const posts = await Posts.findByIdAndUpdate(id, post);
            successHandle(res, posts);
        }
        catch(error) {
            errorHandle(res, error);
        }
    });
}
module.exports = patchPosts;