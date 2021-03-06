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

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Artha</title></head><body><form method=post action> <h1>Cadastre-se na Artha</h1> <p> <label for=nome>Nome: </label><input id=nome name=nome type=text placeholder=nome></p><p> <label for=sobrenome>Sobrenome: </label><input id=sobrenome name=sobrenome type=text placeholder=sobrenome></p><p> <label for=email>E-Mail: </label><input id=email name=email type=email placeholder=contato@htmlecsspro.com> </p><p> <label for=senha>Senha: </label><input id=senha name=senha type=senha placeholder=senha> </p><p> <label for=cpf>CPF: </label><input id=cpf name=cpf type=number placeholder=cpf></p><p> <label for=rg>RG: </label><input id=rg name=rg type=number placeholder=rg></p><p> <label for=dt_nasc>Data de nascimento: </label><input id=dt_nasc name=dt_nasc type=date placeholder=dt_nasc></p><p> <label for=telefone>Telefone: </label><input id=telefone name=telefone type=number placeholder=telefone></p><p><label for=cep>Cep:</label><input id=cep name=cep type=number></p><p><label for=rua>Rua:</label><input id=rua name=rua type=text></p><p><label for=numero>Numero:</label><input type=text name=numero size=4></p><p><label for=bairro>Bairro:</label><input type=text name=bairro size=4></p><p><label for=complemento>Complemento:</label><input type=text name=complemento size=4></p><p><label for=estado>Estado:</label><select name=estado> <option value=ac>Acre</option> <option value=al>Alagoas</option> <option value=am>Amazonas</option> <option value=ap>Amapá</option> <option value=ba>Bahia</option> <option value=ce>Ceará</option> <option value=df>Distrito Federal</option> <option value=es>Espírito Santo</option> <option value=go>Goiás</option> <option value=ma>Maranhão</option> <option value=mt>Mato Grosso</option> <option value=ms>Mato Grosso do Sul</option> <option value=mg>Minas Gerais</option> <option value=pa>Pará</option> <option value=pb>Paraíba</option> <option value=pr>Paraná</option> <option value=pe>Pernambuco</option> <option value=pi>Piauí</option> <option value=rj>Rio de Janeiro</option> <option value=rn>Rio Grande do Norte</option> <option value=ro>Rondônia</option> <option value=rs>Rio Grande do Sul</option> <option value=rr>Roraima</option> <option value=sc>Santa Catarina</option> <option value=se>Sergipe</option> <option value=sp>São Paulo</option> <option value=to>Tocantins</option> </select></p><p><label for=cidade>Cidade: </label><input type=text name=cidade></p><p><label for=nome_contato>Nome contato: </label><input type=text name=nome_contato></p><p><label for=tel_contato>Tel. Contato: </label><input type=text name=tel_contato></p><p> <input type=submit value=Cadastrar> </p><p class=link> Já tem conta? <a href=/login> Ir para Login </a></p></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "90");

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
