const bcrypt = require('bcryptjs');
const connection = require('../infra/databaseConnection');

var emailDigitadoPeloUsuario = 'williamliberos1@gmail.com';
var senhaDigitadaPeloUsuario = '123';

connection.query("SELECT * FROM usuario WHERE email = ?", [emailDigitadoPeloUsuario],
    function(err, rows) {
        if (err) {
            return (err);
        }
        
        console.log(rows[0].senha);

        const match = bcrypt.compareSync(senhaDigitadaPeloUsuario, rows[0].senha);

        if(match) {
            console.log('Granted!')
        }else {
            console.log('Access Denied')
        }
});
