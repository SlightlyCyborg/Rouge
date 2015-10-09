
//Initialize ear
var ear = require('./ears/app.js');
var todo = require('./activities/node-todo/server.js');
var location_module = require('./location/app.js');

location_module.start_location_poll(30000);
