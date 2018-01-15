'use strict';

const server = require('./lib/server');
const router = require('./routes/router');
const requestHandlers = require('./routes/requestHandlers');

let handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(router.route, handle);
