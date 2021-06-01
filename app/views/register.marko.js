// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/artha$1.0.0/app/views/register.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=description content><meta name=author content><title>Cadastro - Artha</title><link href=static/vendor/fontawesome-free/css/all.min.css rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i rel=stylesheet><link href=static/assets/css/sb-admin-2.min.css rel=stylesheet><link href=static/assets/css/login.css rel=stylesheet></head><style>\n    #medico-form {\n        display: none;\n    }\n\n    .second-pass-user {\n        display: none;\n    }\n\n    .second-pass-doctor {\n        display: none;\n    }\n\n    .third-pass-doctor {\n        display: none;\n    }\n\n    .btn-back {\n      color: #fff;\n        background-color: red;\n        border-color: red;\n    }\n\n    .right-side{\n      display: flex;\n      align-items: center;\n      padding: 0px;\n    }\n\n   .title-names{\n    text-align: center;\n   }\n\n  @media screen and (min-width: 990px) {\n    .container-forms{\n      padding-left: 3rem;\n    }\n  }\n    \n  @media screen and (max-width: 570px) {\n    .div-endereco {\n        margin-top: 1em;\n    }\n  }\n</style><body class=bg-gradient-primary><div class=container><div class=\"card o-hidden border-0 shadow-lg my-5\"><div class=\"card-body p-0 card-personalizes-size\"><div class=row><div class=\"col-lg-5 d-none d-lg-block right-side\"><img class=artha-img src=static/assets/img/artha-background.jpeg alt></div><div class=\"col-lg-7 container-forms\"><div class=p-2><div class=text-center><h1 class=\"h4 text-gray-900 \">Criar uma conta! </h1><a href=/ >Voltar a Home</a> </div><div class=\"form-group row justify-content-center\"><div class=\"form-check col-2 mr-5\"><label class=\"form-check-label paciente-check\" for=paciente-check1><input class=\"title-names form-check-input paciente-check\" type=radio name=exampleRadios id=paciente-check1 checked value=option1> Paciente</label></div><div class=\"form-check col-2\"><label class=\"form-check-label medico-check\" for=medico-check1><input class=\"title-names form-check-input medico-check\" type=radio name=exampleRadios id=medico-check1 value=option2> Profissional</label></div></div><div id=paciente-form><form class=user action method=post><input type=hidden id=tipoUsuario name=tipoUsuario value=paciente><div class=text-center><h1>PACIENTE</h1></div><div class=first-pass-user><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=text class=\"form-control \" id=nome name=nome required placeholder=Nome><div class=valid-feedback>Tudo certo!</div></div><div class=col-sm-6><input type=text class=\"form-control \" id=sobrenome name=sobrenome required placeholder=Sobrenome></div></div><div class=\"form-group row\"><div class=col-12><input type=text class=\"form-control \" id=email name=email required placeholder=Email></div></div><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=text class=\"form-control \" id=cpf name=cpf required placeholder=CPF onkeydown=\"mascara('###.###.###-##',this,event,true)\" maxlength=14></div><div class=col-sm-6><input type=text class=\"form-control \" id=rg name=rg required placeholder=RG onkeydown=\"mascara('##.###.###-#',this,event,true)\" maxlength=12></div></div><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=date class=\"form-control \" id=dtNascimento name=dtNascimento required placeholder=\"Dt Nasc\"></div><div class=col-sm-6><input type=text class=\"form-control \" id=telefone name=telefone required placeholder=TEL onkeydown=\"mascara('(##) #####-####',this,event,true)\" maxlength=15></div></div><div class=\"form-group row justify-content-center\"><div class=\"col-sm-5 mb-3 mb-sm-0\"><button id=first-next-user class=\"btn btn-green btn-block\">Próximo</button></div></div></div><div class=second-pass-user><div class=\"form-group row\"><div class=col-sm-6><input type=text class=\"form-control \" id=cep name=cep required placeholder=CEP onblur=recuperaCep(); onkeydown=\"mascara('#####-###',this,event,true)\" maxlength=9></div><div class=\"col-sm-6 div-endereco\"><p>Estado: <span data-js=UF id=estadoUf name=estadoUf></span></p><input type=hidden id=estadoUfPost name=estadoUfPost></div></div><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><p>Cidade: <span data-js id=cidade name=cidade></span></p><input type=hidden id=cidadePost name=cidadePost value></div><div class=col-sm-6><p>Bairro: <span data-js id=bairro name=bairro></span></p><input type=hidden id=bairroPost name=bairroPost></div></div><div class=\"form-group row\"><div class=\"col-sm-6 mb-sm-0\"><p class=mb-0>Endereço: <span data-js id=endereco name=endereco></span></p><input type=hidden id=enderecoPost name=enderecoPost></div></div><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=text class=\"form-control \" id=complemento name=complemento required placeholder=Complemento:></div><div class=col-sm-6><input type=text class=\"form-control \" id=numeroEndereco name=numeroEndereco required placeholder=N°:></div></div><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=text class=\"form-control \" id=nomeContato name=nomeContato required placeholder=\"Nome Contato\"></div><div class=col-sm-6><input type=text class=\"form-control \" id=telContato name=telContato required placeholder=\"Tel Contato\" onkeydown=\"mascara('(##) #####-####',this,event,true)\" maxlength=15></div></div><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=password class=\"form-control \" id=senha name=senha required placeholder=Senha></div><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=password class=\"form-control \" id=senhaConfirma name=senhaConfirma required placeholder=\"Confirmar Senha\"></div></div><div class=\"form-group row justify-content-center\"><div class=\"col-sm-5 mb-3 mb-sm-0\"><a href id=first-back-user class=\"btn btn-block btn-back\">Voltar</a></div><div class=\"col-sm-5 mb-3 mb-sm-0\"><button type=submit href class=\"btn btn-green btn-block\">Registrar Conta</button></div></div></div></form></div><div id=medico-form><form class=doctor action method=post><input type=hidden id=tipoUsuario name=tipoUsuario value=medico><div class=text-center><h1>PROFISSIONAL</h1></div><div class=first-pass-doctor><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=text class=\"form-control \" id=nomeMedico name=nomeMedico placeholder=Nome></div><div class=col-sm-6><input type=text class=\"form-control \" id=sobrenomeMedico name=sobrenomeMedico placeholder=Sobrenome></div></div><div class=\"form-group row\"><div class=col-12><input type=email class=\"form-control \" id=emailMedico name=emailMedico placeholder=Email></div></div><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=text class=\"form-control \" id=cpfMedico name=cpfMedico placeholder=CPF onkeydown=\"mascara('###.###.###-##',this,event,true)\" onblur=\"mascara('###.###.###-##',this,event,true)\" maxlength=14></div><div class=col-sm-6><input type=text class=\"form-control \" id=rgMedico name=rgMedico placeholder=RG onkeydown=\"mascara('##.###.###-#',this,event,true)\" onblur=\"mascara('##.###.###-#',this,event,true)\" maxlength=12></div></div><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=date class=\"form-control \" id=dtNascimentoMedico name=dtNascimentoMedico placeholder=\"Dt Nasc\"></div><div class=col-sm-6><input type=text class=\"form-control \" id=telefoneMedico name=telefoneMedico placeholder=TEL onkeydown=\"mascara('(##) #####-####',this,event,true)\" onblur=\"mascara('(##) #####-####',this,event,true)\" maxlength=15></div></div><div class=\"form-group row justify-content-center\"><div class=\"col-sm-5 mb-3 mb-sm-0\"><a href id=first-next-doctor class=\"btn btn-green btn-block\">Próximo</a></div></div></div><div class=second-pass-doctor><div class=\"form-group row\"><div class=col-sm-6><input type=text class=\"form-control \" id=cepMedico name=cepMedico placeholder=CEP onblur=\"recuperaCepMedico(); mascara('#####-###',this,event,true);\" onkeydown=\"mascara('#####-###',this,event,true)\" maxlength=9></div><div class=\"col-sm-6 div-endereco\"><p>Estado: <span data-js=UF id=estadoUfMedico name=estadoUfMedico></span></p><input type=hidden id=estadoUfMedicoPost name=estadoUfMedicoPost value></div></div><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><p>Cidade: <span data-js id=cidadeMedico name=cidadeMedico></span></p><input type=hidden id=cidadeMedicoPost name=cidadeMedicoPost value></div><div class=col-sm-6><p>Bairro: <span data-js id=bairroMedico name=bairroMedico></span></p><input type=hidden id=bairroMedicoPost name=bairroMedicoPost value></div></div><div class=\"form-group row\"><div class=\"col-sm-6 mb-sm-0\"><p>Endereço: <span data-js id=enderecoMedico name=enderecoMedico></span></p><input type=hidden id=enderecoMedicoPost name=enderecoMedicoPost value></div></div><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=text class=\"form-control \" id=complementoMedico name=complementoMedico required placeholder=Complemento:></div><div class=col-sm-6><input type=text class=\"form-control \" id=numeroMedico name=numeroMedico required placeholder=N°: onkeydown=\"mascara('#################',this,event,true)\"></div></div><div class=\"form-group row justify-content-center\"><div class=\"col-sm-5 mb-3 mb-sm-0\"><a href id=first-back-doctor class=\"btn btn-block btn-back\">Voltar</a></div><div class=\"col-sm-5 mb-3 mb-sm-0\"><a href id=second-next-doctor class=\"btn btn-green btn-block\">Próximo</a></div></div></div><div class=third-pass-doctor><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=text class=\"form-control \" id=crmMedico name=crmMedico placeholder=\"Registro Profissional\" onkeydown=\"mascara('##############',this,event,true)\"></div><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=text class=\"form-control \" id=crmMedicoConfirma placeholder=\"Registro Profissional\" onkeydown=\"mascara('##############',this,event,true)\"></div></div><div class=\"form-group row\"><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=password class=\"form-control \" id=senhaMedico name=senhaMedico placeholder=Senha></div><div class=\"col-sm-6 mb-3 mb-sm-0\"><input type=password class=\"form-control \" id=senhaConfirmaMedico name=senhaConfirmaMedico placeholder=\"Confirmar Senha\"></div></div><div class=\"form-group row justify-content-center\"><div class=\"col-sm-5 mb-3 mb-sm-0\"><a href id=second-back-doctor class=\"btn  btn-block btn-back\">Voltar</a></div><div class=\"col-sm-5 mb-3 mb-sm-0\"><button type=submit href class=\"btn btn-green btn-block\">Registrar Conta</button></div></div></div></form></div></div></div></div></div></div></div><script src=static/vendor/jquery/jquery.min.js></script><script src=static/vendor/bootstrap/js/bootstrap.bundle.min.js></script><script src=static/vendor/jquery-easing/jquery.easing.min.js></script><script src=static/assets/js/sb-admin-2.min.js></script><script src=static/assets/js/change-div.js></script><script src=static/assets/js/recuperaCep.js></script><script src=static/assets/js/mascaraJs/mascara.min.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "177");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/artha$1.0.0/app/views/register.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
