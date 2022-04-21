const Posts = require('../model/posts.js');
const successHandle = require('../successHandle');
const errorHandle = require('../errorHandle');

function postPosts(req, res) {
    let body = '';
    req.on('data', (chunk)=>{
        body += chunk;    
    });
    req.on('end', async ()=>{
        try{
            const post = JSON.parse(body);
            console.log(post);
            if(post.name && post.tags[0] && post.type && post.content) {
                const posts = await Posts.create(post);
                successHandle(res, posts);
            }
            else{
                errorHandle(res, '未填必填欄位(name, tags, type, content)');
            }
        }
        catch(error) {
            errorHandle(res, error);
        }
    });
}
module.exports = postPosts;