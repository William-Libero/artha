const baseController = require("../controllers/baseController");
const BaseController = new baseController();

module.exports = (app) => {
    const rotasBase = baseController.rotas();

    app.get(rotasBase.home, BaseController.home());

    app.get(rotasBase.logout, BaseController.logout());
}