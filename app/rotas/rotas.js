const baseRotas = require("../rotas/baseRotas");
const arthaRotas = require("../rotas/arthaRotas");

module.exports = (app) => {
    baseRotas(app);
    arthaRotas(app);
}