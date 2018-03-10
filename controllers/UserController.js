var bcrypt = require('bcrypt-nodejs');
var mysqlEasyModel = require('mysql-easy-model');


var modelUser = require('../models/User');
var User = mysqlEasyModel.model('user');

exports.getUserById = function(req, res) {
	var user = User.find({id: req.params.id}, function(err, user){
		if(!err)
			res.send(user);	
	})
	
}

exports.getAllUsers = function(req, res) {
	res.send('All Users Get');
}

exports.putUser = function(req, res) {
	const pass = bcrypt.hashSync('test');

	var user = new User({
					name: 'John Smith', 
					email: 'js@gmail.com',
					password: pass,
					role_id: 2,
					remember_token: null,
					created_at: "",
					updated_at: '',
					deleted_at: '',
				});
	user.create(function(err, result){
		if(err)
			console.log(err)
    	if(!err) 
    		res.send('created');
	});
	//res.send('All Users Get');
}
