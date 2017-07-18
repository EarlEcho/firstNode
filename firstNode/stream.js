var fs = require("fs");

//读取文件流
/*var data = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('utf8');

readerStream.on('data', function(chunk) {
	data += chunk;
});

readerStream.on('end',function(){
	console.log(data);
});

readerStream.on('error',function(err){
	console.log(err.stack);
});

console.log('程序执行完毕');*/


//写入流
var data = 'hello node.js--echo';

//创建一个可以写入的流，写入到文件output.txt中
var writeStream = fs.createWriteStream('output.txt');

//使用utf8编码写入数据
writeStream.write(data,'utf8');
//标记文件末尾
writeStream.end();

//处理流事件
writeStream.on('finish',function(){
	console.log("写入完成。");
});

writeStream.on('error',function(err){
	console.log(err.stack);
});

console.log("程序执行完毕");
