var mysqlEasyModel = require('mysql-easy-model');

/*mysqlEasyModel.createConnection({
    connectionLimit : 100,
    host            : process.env.db_host,
    user            : process.env.db_user,
    password		: process.env.db_pass,
    database        : process.env.db_name
});*/



mysqlEasyModel.createConnection({
    connectionLimit : 100,
    host            : 'localhost',
    user            : 'root',
    password		: 'toor',
    database        : 'assessments'
});

module.exports.mysqlEasyModel = mysqlEasyModel;