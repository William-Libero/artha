// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/artha$1.0.0/app/views/admin.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=description content><meta name=author content><title>Artha</title><link href=../static/vendor/fontawesome-free/css/all.min.css rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i rel=stylesheet><link href=../static/assets/css/sb-admin-2.min.css rel=stylesheet><link rel=stylesheet href=../static/assets/css/global.css></head><body id=page-top><div id=wrapper><ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=accordionSidebar><a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=#><div class=\"sidebar-brand-icon rotate-n-15\"><img src=../static/assets/img/artha_icon.ico class=artha-icon alt></div><div class=\"sidebar-brand-text mx-3\">Artha</div></a><hr class=\"sidebar-divider my-0\"><li class=\"nav-item active\"><a class=nav-link id=btn-list-medicos href=#><i class=\"fas fa fa-user-md\"></i><span>Profissionais</span></a><a class=nav-link id=btn-list-pacientes href=#><i class=\"fas fa fa-user\"></i><span>Pacientes</span></a></li><div class=\"text-center d-none d-md-inline\"><button class=\"rounded-circle border-0\" id=sidebarToggle></button></div></ul><div id=content-wrapper class=\"d-flex flex-column\"><div id=content><nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\"><button id=sidebarToggleTop class=\"btn btn-link d-md-none rounded-circle mr-3\"><i class=\"fa fa-bars\"></i></button><ul class=\"navbar-nav ml-auto\"><li class=\"nav-item dropdown no-arrow d-sm-none\"><a class=\"nav-link dropdown-toggle\" href=# id=searchDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false><i class=\"fas fa-search fa-fw\"></i></a><div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\" aria-labelledby=searchDropdown><form class=\"form-inline mr-auto w-100 navbar-search\"><div class=input-group><input type=text class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=Search aria-describedby=basic-addon2><div class=input-group-append><button class=\"btn btn-primary\" type=button><i class=\"fas fa-search fa-sm\"></i></button></div></div></form></div></li><div class=\"topbar-divider d-none d-sm-block\"></div><li class=\"nav-item dropdown no-arrow\"><a class=\"nav-link dropdown-toggle\" href=# id=userDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false><span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Admin</span></a></li></ul></nav><div><div class=container-fluid><div class=container-fluid><div class=\"card shadow mb-4\" id=table-medicos style=\"display: block;\"><div class=\"card-header py-3\"><h6 class=\"m-0 font-weight-bold text-primary\">Profissionais</h6></div><div class=card-body><div class=table-responsive><table class=\"table table-bordered\" id=dataTable width=100% cellspacing=0><thead><tr><th>Nome</th><th>Email</th><th>Data de nascimento</th></tr></thead><tbody>");

  var $for$0 = 0;

  marko_forOf(data.medicosData, function(medico, index) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(medico.nome) +
      " " +
      marko_escapeXml(medico.sobrenome) +
      "</td><td>" +
      marko_escapeXml(medico.email) +
      "</td><td>" +
      marko_escapeXml(medico.dt_nasc) +
      "</td></tr> ");
  });

  out.w("</tbody></table></div></div></div><div class=\"card shadow mb-4\" id=table-pacientes style=\"display: none;\"><div class=\"card-header py-3\"><h6 class=\"m-0 font-weight-bold text-primary\">Pacientes</h6></div><div class=card-body><div class=table-responsive><table class=\"table table-bordered table-pacientes\" id=dataTable width=100% cellspacing=0><thead><tr><th>Nome</th><th>Email</th><th>Data de nascimento</th></tr></thead><tbody>");

  var $for$1 = 0;

  marko_forOf(data.pacientesData, function(paciente, index) {
    var $keyScope$1 = "[" + (($for$1++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(paciente.nome) +
      " " +
      marko_escapeXml(paciente.sobrenome) +
      "</td><td>" +
      marko_escapeXml(paciente.email) +
      "</td><td>" +
      marko_escapeXml(paciente.dt_nasc) +
      "</td></tr> ");
  });

  out.w("</tbody></table></div></div></div></div></div></div></div><footer class=\"sticky-footer bg-white\"><div class=\"container my-auto\"><div class=\"copyright text-center my-auto\"><span>Copyright &copy; Artha</span></div></div></footer></div></div><a class=\"scroll-to-top rounded\" href=#page-top><i class=\"fas fa-angle-up\"></i></a><div class=\"modal fade\" id=logoutModal tabindex=-1 role=dialog aria-labelledby=exampleModalLabel aria-hidden=true><div class=modal-dialog role=document><div class=modal-content><div class=modal-header><h5 class=modal-title id=exampleModalLabel>Ready to Leave?</h5><button class=close type=button data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button></div><div class=modal-body>Select \"Logout\" below if you are ready to end your current session.</div><div class=modal-footer><button class=\"btn btn-secondary\" type=button data-dismiss=modal>Cancel</button><a class=\"btn btn-primary\" href=login.html>Logout</a></div></div></div></div><script src=../static/vendor/jquery/jquery.min.js></script><script src=../static/vendor/bootstrap/js/bootstrap.bundle.min.js></script><script src=../static/vendor/jquery-easing/jquery.easing.min.js></script><script src=../static/assets/js/sb-admin-2.min.js></script><script src=../static/vendor/chart.js/Chart.min.js></script><script src=../static/assets/js/demo/chart-area-demo.js></script><script src=../static/assets/js/demo/chart-pie-demo.js></script><script>\r\n    $(\"#btn-list-medicos\").click(function(){\r\n      $(\"#table-medicos\").css(\"display\", \"block\");\r\n      $(\"#table-pacientes\").css(\"display\", \"none\");\r\n    });\r\n\r\n    $(\"#btn-list-pacientes\").click(function(){\r\n      $(\"#table-medicos\").css(\"display\", \"none\");\r\n      $(\"#table-pacientes\").css(\"display\", \"block\");\r\n    });\r\n  </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "101");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/artha$1.0.0/app/views/admin.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
