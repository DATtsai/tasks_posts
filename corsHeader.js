const headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*', // CORS容許其他伺服器IP都可造訪
    'Access-Control-Allow-Methods': 'PATCH, POST, GET, OPTIONS, DELETE', // 支援方法
    'Content-Type': 'application/json'
}
module.exports = headers;