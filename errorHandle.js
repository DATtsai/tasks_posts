const headers = require('./corsHeader.js');
function errorHandle(res, error) {
    res.writeHead(400, headers);
    res.write(
        JSON.stringify({
            status: 'fail',
            message: error,
        })
    );
    res.end();
}

module.exports = errorHandle;