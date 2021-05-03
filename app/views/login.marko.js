// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/artha$1.0.0/app/views/login.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=description content><meta name=author content><title>Login - Artha</title><link href=static/vendor/fontawesome-free/css/all.min.css rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i rel=stylesheet><link href=static/assets/css/sb-admin-2.min.css rel=stylesheet><link href=static/assets/css/login.css rel=stylesheet><link rel=stylesheet href=static/assets/css/global.css></head><style>\r\n  .btn-green{\r\n    font-weight: bold;\r\n  }\r\n  form.user .form-control-user {\r\n    font-size: .8rem;\r\n    border-radius: 0rem;\r\n    padding: 1.5rem 1rem;\r\n}\r\n\r\n  </style><body class=bg-gradient-primary><div class=container><div class=\"row justify-content-center\"><div class=\"col-xl-10 col-lg-12 col-md-9\">");

  if (data.loginInvalido == true) {
    out.w("<div class=container-erro-login><div class=\"d-flex justify-content-between alert alert-danger erro-login\" role=alert>Login ou senha invalidos<span><i class=\"fas fa-times close-erro-login\"></i></span></div></div>");
  }

  out.w("<div class=\"card o-hidden border-0 shadow-lg my-5\"><div class=\"card-body p-0\"><div class=row><div class=\"col-lg-6 d-none d-lg-block \"><img class=artha-img src=static/assets/img/artha-background.jpeg alt></div><div class=col-lg-6><div class=p-5><div class=text-center><h1 class=\"h4 text-gray-900 mb-4\">Bem-vindo à Artha!</h1></div><form method=post action class=user><div class=form-group><input type=email class=\"form-control form-control-user\" id=email name=email aria-describedby=email placeholder=\"Digite seu email...\"></div><div class=form-group><input type=password class=\"form-control form-control-user\" id=senha name=senha placeholder=Senha></div><div class=form-group><div class=\"custom-control custom-checkbox small\"><input type=checkbox class=custom-control-input id=customCheck><label class=custom-control-label for=customCheck>Lembrar Senha</label></div></div><input type=submit value=Entrar class=\"btn btn-green btn-block\"><hr><div class=\"form-row justify-content: space-around justify-content-center\"> <a href=/qrcodeUser class=\"btn-qrcode justify-content-center\">QR Code</a> </div></form><hr><div class=text-center><a class=small href=/cadastro>Criar conta!</a></div></div></div></div></div></div></div></div></div><script src=static/vendor/jquery/jquery.min.js></script><script src=static/vendor/bootstrap/js/bootstrap.bundle.min.js></script><script src=static/vendor/jquery-easing/jquery.easing.min.js></script><script src=static/assets/js/sb-admin-2.min.js></script><script src=static/assets/js/login-js/login.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "47");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/artha$1.0.0/app/views/login.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
