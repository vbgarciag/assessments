//var mysqlEasyModel = require('../config/db.js').mysqlEasyModel; 
var mysqlEasyModel = require('mysql-easy-model');

mysqlEasyModel.createConnection({
    connectionLimit : 100,
    host            : 'localhost',
    user            : 'root',
    password		: 'toor',
    database        : 'assessments'
});

var User = mysqlEasyModel.model('user', {
  	table: 'users',
  	fields: ['id', 'name', 'email', 'password', 'role_id', 'remember_token', 'created_at', 'updated_at', 'deleted_at'],
  	primary: ['id']
});


module.exports.User = User;