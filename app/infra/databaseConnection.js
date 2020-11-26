var mysql = require('mysql');
var connect = {
  host: 'br182.hostgator.com.br',
  user: 'evidence_dev',
  password: 'evidence_dev1',
  database: 'evidence_artha'
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(connect);

  connection.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      setTimeout(handleDisconnect, 2000);
    }

    console.log('connected as id ' + connection.threadId);
  });

  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect(); 
    } else { 
      throw err;                                  
    }
  });
}

handleDisconnect();

module.exports = connection;