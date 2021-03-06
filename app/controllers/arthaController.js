const ArthaDao = require('../infra/ArthaDao');

const templates = require('../views/template');

class arthaController {
  static rotas() {
    return {
      autenticadas: '/dashboard*',
      cadastro: '/cadastro',
      login: '/login',
      dashboard: '/dashboard/:id',
      paciente: '/paciente/:id',
      paciente_scanned: '/paciente_scanned/:id',
      paciente_data: '/paciente_data/:id',
      medico: '/medico/:id',
      admin: '/admin',
      qrcodeUser: '/qrcodeUser',
      vinculationUser: '/vinculationUser/:id'
    };
  }

  cadastroAcesso() {
    return (req, resp) => {
      resp.marko(templates.artha.register);
    };
  }

  cadastro() {
    return (req, resp) => {
      const arthaDao = new ArthaDao();
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
      const arthaDao = new ArthaDao();

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
      const arthaDao = new ArthaDao();
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
          
          if(usuario != 'admin' && usuario[0].id_usuario > 0){
            return resp.redirect('/paciente/' + usuario[0].id_usuario);
          }else if(usuario != 'admin' && usuario[0].id_medico > 0){
            return resp.redirect('/medico/' + usuario[0].id_medico);
          }else{
            return resp.redirect('/admin');
          }
        });
      })(req, resp, next);
    };
  }
  
  loginPaciente() {
    return (req, resp) => {
      const arthaDao = new ArthaDao();
      const id = req.params.id;
      arthaDao
        .getUsuario(id)
        .then(usuario => {
          if(usuario[0].doencas_auto_adquiridas){
            var doencas = usuario[0].doencas_auto_adquiridas.split(",");
            usuario[0].hipertencao  = doencas[0] != 'undefined' ? 'checked' : '';
            usuario[0].tabagismo    = doencas[1] != 'undefined' ? 'checked' : '';
            usuario[0].estresse     = doencas[2] != 'undefined' ? 'checked' : '';
            usuario[0].sedentarismo = doencas[3] != 'undefined' ? 'checked' : '';
            usuario[0].diabetes     = doencas[4] != 'undefined' ? 'checked' : '';
            usuario[0].colesterol   = doencas[5] != 'undefined' ? 'checked' : '';
          }
          
          resp.marko(templates.artha.paciente, {
            usuario
          })
        }
        )
        .catch(error => console.log(error));
    };
  }

  pacienteScanned() {
    return (req, resp) => {
      const arthaDao = new ArthaDao();
      const id = req.params.id;
      arthaDao
        .getUsuario(id)
        .then(usuario => { 
          if(usuario[0].doencas_auto_adquiridas){
            var doencas = usuario[0].doencas_auto_adquiridas.split(",");
            usuario[0].hipertencao  = doencas[0] != 'undefined' ? 'checked' : '';
            usuario[0].tabagismo    = doencas[1] != 'undefined' ? 'checked' : '';
            usuario[0].estresse     = doencas[2] != 'undefined' ? 'checked' : '';
            usuario[0].sedentarismo = doencas[3] != 'undefined' ? 'checked' : '';
            usuario[0].diabetes     = doencas[4] != 'undefined' ? 'checked' : '';
            usuario[0].colesterol   = doencas[5] != 'undefined' ? 'checked' : '';
          }
                   
          resp.marko(templates.artha.paciente_scanned, {
            usuario
          })
        }
        )
        .catch(error => console.log(error));
    };
  }

  editaPaciente() {
    return (req, resp) => {
      const arthaDao = new ArthaDao();
      arthaDao
        .editaPaciente(req.body)
        .then(resp.redirect('/paciente/'+req.body.idUsuario))
        .catch(error => console.log(error));
    };
  }

  loginMedico() {
    return (req, resp) => {
      const arthaDao = new ArthaDao();
      const id = req.params.id;
      arthaDao
        .getMedico(id)
        .then(medico =>
          arthaDao
            .getVinculacaoMedico(id)
            .then(pacientesVinculados =>
              resp.marko(templates.artha.medico, {
                medico, pacientesVinculados
              })
            ).catch(error => console.log(error))
        )
        .catch(error => console.log(error));
    };
  }

  loginAdmin() {
    return (req, resp) => {
      const arthaDao = new ArthaDao();
      var medicosData = null;
      var pacientesData = null;

      arthaDao
        .getMedicos()
        .then(medicos => {
          medicosData = medicos
          arthaDao
            .getUsuarios()
            .then(pacientes => {
              pacientesData = pacientes      
              resp.marko(templates.artha.admin, {
                medicosData,
                pacientesData
              });
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
      
    };
  }

  qrcodeUser(){
    return (req, resp) => {
      const arthaDao = new ArthaDao();
      const id = req.params.id;
      resp.marko(templates.artha.qrcodeUser);
    };
  }

  vinculationUser(){
    return (req, resp) => {
      const arthaDao = new ArthaDao();
      const id = req.params.id.split('&');
      var idUsuario = id[0];
      var idMedico = id[1];
      arthaDao
      .vinculaPacienteAoMedico(idMedico,idUsuario)
      .then(usuario => { 
        resp.redirect('/medico/' + idMedico);
      }).catch(error => console.log(error));
    }
  }

  pacienteData(){
    return (req, resp) => {
      const arthaDao = new ArthaDao();
      const id = req.params.id;
      arthaDao
        .getUsuario(id)
        .then(usuario => {
          if(usuario[0].doencas_auto_adquiridas){
            var doencas = usuario[0].doencas_auto_adquiridas.split(",");
            usuario[0].hipertencao  = doencas[0] != 'undefined' ? 'checked' : '';
            usuario[0].tabagismo    = doencas[1] != 'undefined' ? 'checked' : '';
            usuario[0].estresse     = doencas[2] != 'undefined' ? 'checked' : '';
            usuario[0].sedentarismo = doencas[3] != 'undefined' ? 'checked' : '';
            usuario[0].diabetes     = doencas[4] != 'undefined' ? 'checked' : '';
            usuario[0].colesterol   = doencas[5] != 'undefined' ? 'checked' : '';
          }
          
          resp.marko(templates.artha.paciente_data, {
            usuario
          })
        }
        )
        .catch(error => console.log(error));
    };
  }
}

module.exports = arthaController;
