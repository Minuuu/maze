var mysql = require('mysql');
var conn = mysql.createConnection({
  host:'localhost',
  port:3306,
  user:'root',
  password:'1234',
  database:'miro'
});
module.exports = conn;
