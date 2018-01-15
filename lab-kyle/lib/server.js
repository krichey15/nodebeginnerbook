'use strict';

const http = require('http');
const url = require('url');

function start(){
  function onRequest(req,res){
    let pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname + ' Recieved');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
}
exports.start = start;
