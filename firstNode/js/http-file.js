var http = require('http');
var fs = require('fs');
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
		fs.readFile('../index.html', 'utf8', function(err, data) {
			if(err) {
				throw err
			}
			response.end(data);
		});

	} else if(url === '/login') {
		fs.readFile('../login.html', 'utf8', function(err, data) {

		});
		response.end();
	} else if(url === '/register') {
		fs.readFile('../register.html', 'utf8', function(err, data) {

		});
		response.end();
	} else if(url === '/css') {
		fs.readFile('../register.html', 'utf8', function(err, data) {

		});
		response.end();
	} else {

		fs.readFile('../404.html', 'utf8', function(err, data) {

		});
		response.end();

	}

})

server.listen(3000, function() {
	console.log('Server is running')
})