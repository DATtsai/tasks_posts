const headers = require('./corsHeader.js');
function successHandle(res, posts) {
    res.writeHead(200, headers);
    res.write(
        JSON.stringify({
            status: 'success',
            data: posts,
        })
    );
    res.end();
}

module.exports = successHandle;