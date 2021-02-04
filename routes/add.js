var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	response.render('index', data, {
		'name': request.query.name, 
		'description': request.query.description,
		'imageURL': "http://lorempixel.com/400/400"
	});
	var newFriend = JSON.stringify(data);
	data.friends.push(newFriend);
 }