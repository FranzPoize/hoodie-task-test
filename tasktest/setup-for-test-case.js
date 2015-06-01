var sa = require('superagent');

var id = Math.random().toString().substr(2);
var username = 'test'
var _id = 'org.couchdb.user:user/' + username;
var password = 'test';

sa.put('http://localhost:6004/_users/' + encodeURIComponent(_id))
	.send({
		_id: _id,
		name:'user/' + username,
		type:'user',
		roles:[],
		password:password,
		hoodieId:id,
		database:'user/' + id,
		updatedAt:new Date(),
		createdAt:new Date(),
		signedUpAt:new Date()
	})
	.end(function(err,rest) {
		if(err) {
			console.log('Error : ' + err);
		} else {
			console.log('User created');
		}
	});