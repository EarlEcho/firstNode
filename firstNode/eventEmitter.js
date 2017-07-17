//将 var events = require('events');
//和 var eventEmitter = new events.EventsEmitter();
//合并成下面一句

var EventEmitter = require('events').EventEmitter;
//实例化
var event = new EventEmitter();

event.on('some_event',function(){
	console.log('some_event事件触发');
});

setTimeout(function(){
	event.emit('some_event');
},1000);
