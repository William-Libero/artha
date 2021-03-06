const uuid = require('uuid/v4');
const sessao = require('cookie-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const ArthaDao = require('../app/infra/ArthaDao');

const bcrypt = require('bcryptjs');

module.exports = (app) => {
    // configuração da sessão e da autenticação.
    passport.use('local', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'senha'
        },
        (email, senha, done) => {
            const arthaDao = new ArthaDao();
            arthaDao.getUsuarioPeloEmail(email)
                    .then(usuario => {
                        if(usuario.length > 0){
                            const match = bcrypt.compare(senha, usuario[0].senha);
                            if (!usuario || match == false) {
                                return done(null, false, {
                                    mensagem: 'Login ou senha incorretos!'
                                });
                            }
                            return done(null, usuario);
                        }else{
                            return done(null, usuario);
                        }
                    })
                    .catch(erro => done(erro, false));
        }
    ));

    passport.serializeUser((usuario, done) => {
        const usuarioSessao = {
            nome: usuario.nome_completo ? usuario.nome_completo : null,
            email: usuario.email ? usuario.email : usuario['email']
        };
        done(null, usuarioSessao);
    });

    passport.deserializeUser((usuarioSessao, done) => {
        done(null, usuarioSessao);
    });

    app.set('trust proxy', 1);

    app.use(sessao({
        secret: 'node alura',
        genid: function(req) {
            return uuid();
        },
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());


    app.use(function (req, resp, next) {
        req.passport = passport;
        next();
    });
}