// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/artha$1.0.0/app/views/tabelas.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=description content><meta name=author content><title>Artha</title><link href=../static/vendor/fontawesome-free/css/all.min.css rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i rel=stylesheet><link href=../static/assets/css/sb-admin-2.min.css rel=stylesheet><link rel=stylesheet href=../static/assets/css/global.css></head><body id=page-top><div id=wrapper><ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=accordionSidebar><a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=#><div class=\"sidebar-brand-icon rotate-n-15\"><img src=../static/assets/img/artha_icon.ico class=artha-icon alt></div><div class=\"sidebar-brand-text mx-3\">Artha</div></a><hr class=\"sidebar-divider my-0\"><li class=\"nav-item active\"><a class=nav-link href=#><i class=\"fas fa-fw fa-tachometer-alt\"></i><span>Dashboard</span></a></li><div class=\"text-center d-none d-md-inline\"><button class=\"rounded-circle border-0\" id=sidebarToggle></button></div></ul><div id=content-wrapper class=\"d-flex flex-column\"><div id=content><nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\"><button id=sidebarToggleTop class=\"btn btn-link d-md-none rounded-circle mr-3\"><i class=\"fa fa-bars\"></i></button><ul class=\"navbar-nav ml-auto\"><li class=\"nav-item dropdown no-arrow d-sm-none\"><a class=\"nav-link dropdown-toggle\" href=# id=searchDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false><i class=\"fas fa-search fa-fw\"></i></a><div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\" aria-labelledby=searchDropdown><form class=\"form-inline mr-auto w-100 navbar-search\"><div class=input-group><input type=text class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=Search aria-describedby=basic-addon2><div class=input-group-append><button class=\"btn btn-primary\" type=button><i class=\"fas fa-search fa-sm\"></i></button></div></div></form></div></li><div class=\"topbar-divider d-none d-sm-block\"></div><li class=\"nav-item dropdown no-arrow\"><a class=\"nav-link dropdown-toggle\" href=# id=userDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false><input type=hidden id=id_medico" +
    marko_attr("value", data.medico[0].id_medico) +
    "><span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">" +
    marko_escapeXml(data.medico[0].nome) +
    " " +
    marko_escapeXml(data.medico[0].sobrenome) +
    "</span><img class=\"img-profile rounded-circle\" src=https://source.unsplash.com/QAB-WJcbgJk/60x60></a></li></ul></nav><div><div class=container-fluid>");

  if (data.pacientesVinculados[0]) {
    out.w("<div class=\"card shadow mb-4\"><div class=\"card-header py-3\"><h6 class=\"m-0 font-weight-bold text-primary\">Pacientes</h6></div><div class=card-body><div class=table-responsive><table class=\"table table-bordered\" id=dataTable width=100% cellspacing=0><thead><tr><th class=text-center>Nome Completo</th><th class=text-center>E-Mail</th><th class=text-center>Data de nascimento</th><th class=text-center>Dados do paciente</th></tr></thead><tbody>");

    var $for$0 = 0;

    marko_forOf(data.pacientesVinculados, function(paciente, index) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<tr><td class=\"text-center pt-3\">" +
        marko_escapeXml(paciente.nome) +
        " " +
        marko_escapeXml(paciente.sobrenome) +
        "</td><td class=\"text-center pt-3\">" +
        marko_escapeXml(paciente.email) +
        "</td><td class=\"text-center pt-3\">" +
        marko_escapeXml(paciente.dt_nasc) +
        "</td><td class=\"text-center pt-3\"><a" +
        marko_attr("href", "/paciente_data/" + (paciente.id_usuario == null ? "" : paciente.id_usuario)) +
        " target=_blank class=\"btn btn-primary\" style=\"background-color: #7c3bc0; border-color: #7c3bc0;\" title=\"Clique para ver os dados do paciente\"><i class=\"fas fa-user\"></i></a></td></tr>");
    });

    out.w(" </tbody></table></div></div></div>");
  } else {
    out.w("<div class=\"container d-flex justify-content-center align-items-center flex-column\"><h2 class=\"text-center text-vinculation\">Você ainda não possui nenhum paciente vinculado.<br> Vincule um paciente agora mesmo:</h2><div><a href=# class=\"btn-qrcode justify-content-center\">QR Code</a></div><div class=\"container-video mt-3\"><video id=preview></video></div></div>");
  }

  out.w("</div></div></div><footer class=\"sticky-footer bg-white\"><div class=\"container my-auto\"><div class=\"copyright text-center my-auto\"><span>Copyright &copy; Artha</span></div></div></footer></div></div><a class=\"scroll-to-top rounded\" href=#page-top><i class=\"fas fa-angle-up\"></i></a><div class=\"modal fade\" id=logoutModal tabindex=-1 role=dialog aria-labelledby=exampleModalLabel aria-hidden=true><div class=modal-dialog role=document><div class=modal-content><div class=modal-header><h5 class=modal-title id=exampleModalLabel>Ready to Leave?</h5><button class=close type=button data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button></div><div class=modal-body>Select \"Logout\" below if you are ready to end your current session.</div><div class=modal-footer><button class=\"btn btn-secondary\" type=button data-dismiss=modal>Cancel</button><a class=\"btn btn-primary\" href=login.html>Logout</a></div></div></div></div><script src=../static/vendor/jquery/jquery.min.js></script><script src=../static/vendor/bootstrap/js/bootstrap.bundle.min.js></script><script src=../static/vendor/jquery-easing/jquery.easing.min.js></script><script src=../static/assets/js/sb-admin-2.min.js></script><script src=../static/vendor/chart.js/Chart.min.js></script><script src=../static/assets/js/demo/chart-area-demo.js></script><script src=../static/assets/js/demo/chart-pie-demo.js></script><script type=text/javascript src=https://rawgit.com/schmich/instascan-builds/master/instascan.min.js></script><script>\n    $(\".btn-qrcode\").click(function(){\n      let scanner = new Instascan.Scanner(\n        {\n          video: document.getElementById('preview')\n        }\n      );\n      scanner.addListener('scan', function (content) {\n        var idUsuario = content.split('paciente_scanned/');\n        var idMedico = $(\"#id_medico\").val();\n        window.open('/vinculationUser/'+idUsuario[1]+'&'+idMedico, '_self');\n      });\n      Instascan.Camera.getCameras().then(cameras => {\n        if (cameras.length > 0) {\n          if(cameras[1]){\n            scanner.start(cameras[1]);\n          }else{\n            scanner.start(cameras[0]);\n          }\n        } else {\n          console.error('Câmera Inexistente');\n        }\n      });\n    });\n  </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "94");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/artha$1.0.0/app/views/tabelas.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
