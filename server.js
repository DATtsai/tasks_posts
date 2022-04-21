const http = require('http');
const dotenv = require('dotenv');
const mongose = require('mongoose');

const headers = require('./corsHeader.js');
const getPosts = require('./router/getPosts.js');
const postPosts = require('./router/postPosts.js');
const deletePosts = require('./router/deletePosts.js');
const patchPosts = require('./router/patchPosts.js');

dotenv.config({path: './config.env'});
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
mongose.connect(DB)
    .then(()=>{
        console.log('資料庫連線成功');
    })
    .catch((error)=>{
        console.log(error);
    })

const requestListener = (req, res) => {
    console.log(req.url);
    if(req.url === '/posts' && req.method === 'GET') {
        // get all posts
        getPosts(req, res);
    }
    else if(req.url === '/posts' && req.method === 'POST') {
        // add a post
        postPosts(req, res);
    }
    else if(req.url === '/posts' && req.method === 'DELETE') {
        // delete all posts
        deletePosts(req, res);
    }
    else if(req.url.startsWith('/posts/') && req.method === 'DELETE') {
        // delete a posts
        deletePosts(req, res);
    }
    else if(req.url.startsWith('/posts/') && req.method === 'PATCH') {
        // edit a post
        patchPosts(req, res);
    }
    else if(req.method === 'OPTIONS') {
        res.writeHead(200, headers);
        res.end();
    }
    else{
        res.writeHead(404, headers);
        res.write(
            JSON.stringify({
                status: 'fail',
                message: '無此路由'
            })
        );
        res.end();
    }
};

const server = http.createServer(requestListener);
server.listen(process.env.PORT || 3000);