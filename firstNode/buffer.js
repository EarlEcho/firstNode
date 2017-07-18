var buf = new Buffer('echojjj');

var json = buf.toJSON(buf);
console.log(json);