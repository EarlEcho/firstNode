//加载操作文件的模块包
//fs 是Node平台提供的一个核心模块，专门用来操作文件
var fs = require('fs');

//写入文件
//fs.writeFile(文件路径，要写入的文件数据，回调处理函数)
//如果文件不存在，直接新建，已存在，直接覆盖
fs.writeFile('../img/echo.txt','hello node!!',function(err){
	//回调函数中的err表示一个错误对象
	//如果文件完成的时候，回调函数会被自动调用
	//如果有错误，err就是一个错误对象，如果没有错误，err就是null
	if(err){
		return console.log('写入文件失败')
	}
	console.log('写入文件成功')
})



//读取文件
//fs.readFile(文件路径，[可选参数：内容编码],回调处理函数);
fs.readFile('../img/echo.txt','utf-8',function(err,data){
	console.log('开始读取文件')
	if(err){
		throw err
		//throw 可以看到具体的错误信息
	}
	console.log(data)
	//toString实际上是把二进制数据进行utf-8编码
})
