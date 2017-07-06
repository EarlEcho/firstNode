var http = require('http')
//1. 通过http.createServer() 创建一个服务，得到一个Server实例对象
var server = http.createServer()

server.on('request', function(request, response) {
	//1.通过req.url拿到当前请求
	var url = request.url
	//response.writeHead(响应状态码，响应头对象)
	response.writeHead(200, {
		'Content-type': 'text/html'
	})

	//2.根据不同的路径，进行不同的响应
	if(url === '/') {

		//在关闭相应的同时发送数据
		response.end('<h1>hahahahha1</h1>');
	} else if(url === '/login') {
		response.end('<h2>login page</h2>');
	} else if(url === '/register') {
		response.end('register page');
	} else {
		response.end('404 notFound');

	}

})

server.listen(3000, function() {
	console.log('Server is running')
})