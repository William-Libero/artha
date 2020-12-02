const arthaController = require('../controllers/arthaController');
const ArthaController = new arthaController();

module.exports = app => {
  const rotasArtha = arthaController.rotas();

  app.use(rotasArtha.autenticadas, function (req, resp, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      resp.redirect(arthaController.rotas().login);
    }
  });

  app
    .route(rotasArtha.cadastro)
    .get(ArthaController.cadastroAcesso())
    .post(ArthaController.cadastro());

  app
    .route(rotasArtha.login)
    .get(ArthaController.loginAcesso())
    .post(ArthaController.efetuaLogin());

  app
    .route(rotasArtha.paciente)
    .get(ArthaController.loginPaciente())

    app
    .route(rotasArtha.medico)
    .get(ArthaController.loginMedico())

  app.get(rotasArtha.dashboard, ArthaController.redirecionaUserDepoisDoLogin());
};
