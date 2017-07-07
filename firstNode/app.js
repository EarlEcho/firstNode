var http = require('http')
var fs = require('fs')
//1. 通过http.createServer() 创建一个服务，得到一个Server实例对象
var server = http.createServer()
//当服务器收到客户端请求时触发，执行请求处理函数

//设置请求处理函数
//请求回调处理函数需要接受两个参数：
//Request： request是一个请求对象，可以拿到当前请求的一些信息，例如请求路径，请求方法，请求报文等
//Response： 是一个相应对象，用来给请求发送响应
var handleRequest = function(request, response) {
	var url = request.url;
	if(url === '/') {
		fs.readFile('views/index.html', 'utf8', function(err, data) {
			if(err) {
				throw err
			}
			//对于发送的响应数据，只能是二进制数据或者字符串
			response.end(data);
		});
	}

}

//2.通过给server实例对象添加request请求事件
//  这个请求事件使所有请求的入口
//  任何请求都会触发该事件，然后执行时间对应的处理函数
server.on('request', handleRequest)

//3. 绑定端口号，开启服务器
// listen：第一个参数是端口号，第二个可选的，第三个参数用来指定开启成功之后的回调处理函数
server.listen(3000, function() {
	console.log('Server is running at port 3000')
	console.log(' Please visit http://127.0.0.1:3000')
})

//在命令行运行程序之后，发现进程不能关，按住ctrl+C，即可退出进程