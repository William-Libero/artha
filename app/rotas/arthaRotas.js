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
    .post(ArthaController.editaPaciente());

  app
    .route(rotasArtha.paciente_scanned)
    .get(ArthaController.pacienteScanned());

  app
  .route(rotasArtha.medico)
  .get(ArthaController.loginMedico())

  app
  .route(rotasArtha.admin)
  .get(ArthaController.loginAdmin())

  app
  .route(rotasArtha.qrcodeUser)
  .get(ArthaController.qrcodeUser())

  app.get(rotasArtha.dashboard, ArthaController.redirecionaUserDepoisDoLogin());
};
