var mysql = require('mysql');
var connection = {
  host: 'br182.hostgator.com.br',
  user: 'evidence_dev',
  password: 'evidence_dev1',
  database: 'evidence_artha'
};

function handleDisconnect() {
  connection = mysql.createConnection(connection);

  connection.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      setTimeout(handleDisconnect, 2000);
    }

    connection.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        handleDisconnect();                         // lost due to either server restart, or a
      } else {                                      // connnection idle timeout (the wait_timeout
        throw err;                                  // server variable configures this)
      }
    });
    console.log('connected as id ' + connection.threadId);
  });
}

handleDisconnect();

module.exports = connection;
