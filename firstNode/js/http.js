var http = require('http')

//构建服务器  服务器主要做三件事：接收请求，处理请求，发出响应
//1. 通过http.createServer() 创建一个服务，得到一个Server实例对象
var server = http.createServer()
//当服务器收到客户端请求时触发，执行请求处理函数
server.on('request',function(){
	console.log('收到客户端请求')
})
