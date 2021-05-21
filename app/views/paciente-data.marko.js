// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/artha$1.0.0/app/views/paciente-data.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_mergeAttrs = require("marko/src/runtime/html/helpers/merge-attrs"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=description content><meta name=author content><title>Artha</title><link href=../static/vendor/fontawesome-free/css/all.min.css rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i rel=stylesheet></head><style>\r\n  label{\r\n    color: rgb(88, 88, 88);\r\n    font-weight: 800;\r\n    font-size: 1.1rem;\r\n  }\r\n  span{\r\n    font-weight: 700;\r\n    font-size: 1.1rem;\r\n  }\r\n</style><body id=page-top><div id=wrapper><ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled\" id=accordionSidebar><a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=/login><div class=\"sidebar-brand-icon rotate-n-15\"><img src=../static/assets/img/artha_icon.ico class=artha-icon alt></div><div class=\"sidebar-brand-text mx-3\">Artha</div></a><hr class=\"sidebar-divider my-0\"><li class=\"nav-item active\"></li><div class=\"text-center d-none d-md-inline\" style=\"padding-top: 20px;\"><button class=\"rounded-circle border-0\" id=sidebarToggle></button></div></ul><div id=content-wrapper class=\"d-flex flex-column\"><div id=content><nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\"><button id=sidebarToggleTop class=\"btn btn-link d-md-none rounded-circle mr-3\"><i class=\"fa fa-bars\"></i></button></nav><div><div class=container-fluid><form class action method=post><input type=hidden id=idUsuario name=idUsuario" +
    marko_attr("value", data.usuario[0].id_usuario) +
    "><div class=\"form-row justify-content: space-around justify-content-center\"><div class=\"form-group col-md-4\"><label for=nome>Nome:</label><br><span id=nome>" +
    marko_escapeXml(data.usuario[0].nome) +
    "</span></div><div class=\"form-group col-md-4\"></div></div><div class=\"form-row justify-content: space-around justify-content-center\"><div class=\"form-group col-md-4\"><label for=nomeContato>Nome de Contato:</label><br><span id=nomeContato>" +
    marko_escapeXml(data.usuario[0].nome_contato) +
    "</span></div><div class=\"form-group col-md-4\"><label for=telContato>Telefone de Contato:</label><br><span id=telContato>" +
    marko_escapeXml(data.usuario[0].telefone_contato) +
    "</span></div></div><div class=ficha-completa id=complete-record style=\"display: block;\"><div class=\"form-row justify-content: space-around justify-content-center\"><div class=\"form-group col-md-4\"><label for=inputEmail4>Tipo Sanguíneo " +
    marko_escapeXml(data.usuario[0].authenticate) +
    "</label><input disabled type=text class=\"form-control \" id=tipoSanguineo name=tipoSanguineo" +
    marko_attr("value", data.usuario[0].tipo_sanguineo) +
    " required></div><div class=\"form-group col-md-4\"><label for=inputEmail4>Plano de Saúde</label><input disabled type=text class=\"form-control \" id=planoDeSaude name=planoDeSaude" +
    marko_attr("value", data.usuario[0].plano_saude) +
    " required></div></div><div class=\"form-row justify-content: space-around justify-content-center\"><div class=\"form-group col-md-4\"><label for=alergia>Alergias</label><textarea disabled class=form-control id=alergia name=alergia rows=3 style=\"resize: none;\">" +
    marko_escapeXml(data.usuario[0].alergias) +
    "</textarea></div><div class=\"form-group col-md-4\"><label>Doenças Auto Adquiridas</label><div class=form-check><input" +
    marko_mergeAttrs(data.usuario[0].hipertencao, {
      disabled: "disabled",
      class: "form-check-input",
      type: "checkbox",
      value: "hipertencao",
      id: "hipertencao",
      name: "hipertencao"
    }) +
    "><label class=form-check-label for=hipertenção>Hipertenção</label></div><div class=form-check><input" +
    marko_mergeAttrs(data.usuario[0].tabagismo, {
      disabled: "disabled",
      class: "form-check-input",
      type: "checkbox",
      value: "tabagismo",
      id: "tabagismo",
      name: "tabagismo"
    }) +
    "><label class=form-check-label for=tabagismo>Tabagismo</label></div><div class=form-check><input" +
    marko_mergeAttrs(data.usuario[0].estresse, {
      disabled: "disabled",
      class: "form-check-input",
      type: "checkbox",
      value: "estresse",
      id: "estresse",
      name: "estresse"
    }) +
    "><label class=form-check-label for=estresse>Estresse</label></div><div class=form-check><input" +
    marko_mergeAttrs(data.usuario[0].sedentarismo, {
      disabled: "disabled",
      class: "form-check-input",
      type: "checkbox",
      value: "sedentarismo",
      id: "sedentarismo",
      name: "sedentarismo"
    }) +
    "><label class=form-check-label for=sedentarismo>Sedentarismo</label></div><div class=form-check><input" +
    marko_mergeAttrs(data.usuario[0].diabetes, {
      disabled: "disabled",
      class: "form-check-input",
      type: "checkbox",
      value: "diabetes",
      id: "diabetes",
      name: "diabetes"
    }) +
    "><label class=form-check-label for=diabetes>Diabetes</label></div><div class=form-check><input" +
    marko_mergeAttrs(data.usuario[0].colesterol, {
      disabled: "disabled",
      class: "form-check-input",
      type: "checkbox",
      value: "colesterol",
      id: "colesterol",
      name: "colesterol"
    }) +
    "><label class=form-check-label for=colesterol>Colesterol</label></div></div></div><div class=\"form-row d-flex justify-content-center align-items-center flex-column\"><a href=tel:1332225211 class=\"btn btn-primary btn-call\" style=\"background-color: #7c3bc0; border-color: #7c3bc0;\">Ligar para o SAMU</a><a href=tel:1332911004 class=\"btn btn-primary btn-call ml-2 mt-2\" style=\"background-color: #7c3bc0; border-color: #7c3bc0;\">Ligar para o Corpo de bombeiros</a></div></div></form></div></div></div><footer class=\"sticky-footer bg-white\"><div class=\"container my-auto\"><div class=\"copyright text-center my-auto\"><span>Copyright &copy; Artha</span></div></div></footer></div></div><a class=\"scroll-to-top rounded\" href=#page-top><i class=\"fas fa-angle-up\"></i></a><div class=\"modal fade\" id=logoutModal tabindex=-1 role=dialog aria-labelledby=exampleModalLabel aria-hidden=true><div class=modal-dialog role=document><div class=modal-content><div class=modal-header><h5 class=modal-title id=exampleModalLabel>Ready to Leave?</h5><button class=close type=button data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button></div><div class=modal-body>Select \"Logout\" below if you are ready to end your current session.</div><div class=modal-footer><button class=\"btn btn-secondary\" type=button data-dismiss=modal>Cancel</button><a class=\"btn btn-primary\" href=login.html>Logout</a></div></div></div></div><link href=../static/assets/css/sb-admin-2.min.css rel=stylesheet><link rel=stylesheet href=../static/assets/css/global.css><script src=../static/vendor/jquery/jquery.min.js></script><script src=../static/vendor/bootstrap/js/bootstrap.bundle.min.js></script><script src=../static/vendor/jquery-easing/jquery.easing.min.js></script><script src=../static/assets/js/sb-admin-2.min.js></script><script src=../static/assets/js/jquery.qrcode.min.js></script><script src=../static/assets/js/qrcode.js></script><script src=../static/assets/js/demo/chart-area-demo.js></script><script src=../static/assets/js/demo/chart-pie-demo.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "100");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/artha$1.0.0/app/views/paciente-data.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
