var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'br182.hostgator.com.br',
  user     : 'evidence_dev',
  password : 'evidence_dev1',
  database : 'evidence_artha'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;