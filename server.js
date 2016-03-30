var express = require('express'),
	 logger = require('morgan')('dev'),
	 moment = require('moment'),
	 server = express(),
	 requests = require('request-promise');
//	 keys = require('./config.js');
    

server.use(express.static(__dirname+'/public'));
server.use(logger);
server.set('port', process.env.PORT || 8080);

server.get('/', frontpage);
server.get('/weather', main)

server.listen(server.get('port'), listenCallback);


function frontpage(req, res){
  res.sendFile('/html/frontpage.html', {root: __dirname+'/public'});
}

function main(req, res){
	res.sendFile('/html/main.html', {root: __dirname+'/public'});
}

function listenCallback(){
  console.log('Now listening on port ' + server.get('port'));
}
