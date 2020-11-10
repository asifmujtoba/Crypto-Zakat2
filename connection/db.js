const mysql = require('mysql');

var config = {
    mysql_pool : mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'cz'
    })
};
module.exports = config;



