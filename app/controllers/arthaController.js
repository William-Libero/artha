const db = require('../infra/databaseConnection');
const ArthaDao = require('../infra/ArthaDao');
const connection = require('../infra/databaseConnection');

const templates = require('../views/template');

class arthaController {
  static rotas() {
    return {
      autenticadas: '/dashboard*',
      cadastro: '/cadastro',
      login: '/login',
      dashboard: '/dashboard/:id',
      paciente: '/paciente/:id',
      medico: '/medico/:id',
      qrcodeUser: '/qrcodeUser'
    };
  }

  cadastroAcesso() {
    return (req, resp) => {
      resp.marko(templates.artha.register);
    };
  }

  cadastro() {
    return (req, resp) => {
      const arthaDao = new ArthaDao(db);
      arthaDao
        .cadastroUsuario(req.body)
        .then(resp.redirect('/login'))
        .catch(error => console.log(error));
    };
  }

  loginAcesso() {
    return (req, resp) => {
      resp.marko(templates.artha.login);
    };
  }

  login() {
    return (req, resp) => {
      const arthaDao = new ArthaDao(db);

      arthaDao
        .login(req.body)
        .then(dados => resp.redirect('/dashboard/' + dados.id_usuario))
        .catch(loginInvalido =>
          resp.marko(templates.artha.login, {
            loginInvalido
          })
        );
    };
  }

  redirecionaUserDepoisDoLogin() {
    return (req, resp) => {
      const arthaDao = new ArthaDao(db);
      const id = req.params.id;
      arthaDao
        .getUsuario(id)
        .then(usuario =>
          resp.marko(templates.artha.dashboard, {
            usuario
          })
        )
        .catch(error => console.log(error));
    };
  }

  efetuaLogin() {
    return function (req, resp, next) {
      // Lógica de login.
      const passport = req.passport;
      passport.authenticate('local', (erro, usuario, info) => {
        if(usuario.length <= 0){
          info = true;
        }
        if (info) {
          var loginInvalido = true;
          return resp.marko(templates.artha.login, { loginInvalido });
        }

        if (erro) {
          return next(erro);
        }

        req.login(usuario, erro => {
          if (erro) {
            return next(erro);
          }
          
          if(usuario[0].id_usuario > 0){
            return resp.redirect('/paciente/' + usuario[0].id_usuario);
          }else if(usuario[0].id_medico > 0){
            return resp.redirect('/medico/' + usuario[0].id_medico);
          }
        });
      })(req, resp, next);
    };
  }
  
  loginPaciente() {
    return (req, resp) => {
      const arthaDao = new ArthaDao(db);
      const id = req.params.id;
      arthaDao
        .getUsuario(id)
        .then(usuario =>
          resp.marko(templates.artha.paciente, {
            usuario
          })
        )
        .catch(error => console.log(error));
    };
  }

  loginMedico() {
    return (req, resp) => {
      const arthaDao = new ArthaDao(db);
      const id = req.params.id;
      arthaDao
        .getMedico(id)
        .then(medico =>
          resp.marko(templates.artha.medico, {
            medico
          })
        )
        .catch(error => console.log(error));
    };
  }

  qrcodeUser(){
    return (req, resp) => {
      const arthaDao = new ArthaDao(db);
      const id = req.params.id;
      resp.marko(templates.artha.qrcodeUser);
    };
  }
}

module.exports = arthaController;
