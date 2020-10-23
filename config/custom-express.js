require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const templates = require('../app/views/template');

app.use(bodyParser.urlencoded());

app.use('/static', express.static('app/public'));

const sessaoAutenticacao = require('./sessaoAutenticacao');
sessaoAutenticacao(app);

const rotas = require('../app/rotas/rotas')
rotas(app);

/*app.use(function (req, resp, next) {
    return resp.status(404).marko(
        templates.base.erro404
    );
});*/

module.exports = app;