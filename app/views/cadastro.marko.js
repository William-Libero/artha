// Compiled using marko@4.23.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/artha$1.0.0/app/views/cadastro.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=description content><meta name=author content><title>Cadastro - Artha</title><link href=static/vendor/fontawesome-free/css/all.min.css rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i rel=stylesheet><link href=static/assets/css/sb-admin-2.min.css rel=stylesheet></head><body class=bg-gradient-primary><div class=container><div class=\"card o-hidden border-0 shadow-lg my-5\"><div class=\"card-body p-0\"><div class=row><div class=\"col-lg-5 d-none d-lg-block bg-register-image\"></div><div class=col-lg-7><div class=p-5><div class=text-center><h1 class=\"h4 text-gray-900 mb-4\">Create an Account!</h1></div><form class=user action method=post><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=text class=\"form-control form-control-user\" id=nome name=nome placeholder=\"First Name\"></div><div class=col-sm-6><input type=text class=\"form-control form-control-user\" id=sobrenome name=sobrenome placeholder=\"Last Name\"></div></div><div class=form-group><input type=email class=\"form-control form-control-user\" id=email name=email placeholder=\"Email Address\"></div><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=password class=\"form-control form-control-user\" id=senha name=senha placeholder=Password></div><div class=col-sm-6><input type=password class=\"form-control form-control-user\" id=senha-repeat name=senha-repeat placeholder=\"Repeat Password\"></div></div><input type=submit value=Cadastrar class=\"btn btn-primary btn-user btn-block\"><hr><a href=/login class=\"btn btn-google btn-user btn-block\"><i class=\"fab fa-google fa-fw\"></i> Register with Google</a><a href=/login class=\"btn btn-facebook btn-user btn-block\"><i class=\"fab fa-facebook-f fa-fw\"></i> Register with Facebook</a></form><hr><div class=text-center><a class=small href=forgot-password.html>Forgot Password?</a></div><div class=text-center><a class=small href=/login>Already have an account? Login!</a></div></div></div></div></div></div></div><script src=static/vendor/jquery/jquery.min.js></script><script src=static/vendor/bootstrap/js/bootstrap.bundle.min.js></script><script src=static/vendor/jquery-easing/jquery.easing.min.js></script><script src=static/assets/js/sb-admin-2.min.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "45");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/artha$1.0.0/app/views/cadastro.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
