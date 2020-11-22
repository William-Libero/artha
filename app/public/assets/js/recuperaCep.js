function recuperaCep(){
    const cepDigitado = document.querySelector("#cep").value;
    const url = `https://viacep.com.br/ws/${cepDigitado}/json/`;

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        atribuiDadosDaApiDeCep(data)
    })
    .catch(err => {
        console.log(err)
    });
}

function atribuiDadosDaApiDeCep(data){
    $('#estadoUf').html(data.uf);
    $('#estadoUfPost').val(data.uf);
    $('#cidade').html(data.localidade);
    $('#cidadePost').val(data.localidade);
    $('#bairro').html(data.bairro);
    $('#bairroPost').val(data.bairro);
    $('#endereco').html(data.logradouro); 
    $('#enderecoPost').val(data.logradouro); 
}

function recuperaCepMedico(){
    const cepDigitado = document.querySelector("#cepMedico").value;
    const url = `https://viacep.com.br/ws/${cepDigitado}/json/`;

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        atribuiDadosDaApiDeCepMedico(data)
    })
    .catch(err => {
        console.log(err)
    });
}

function atribuiDadosDaApiDeCepMedico(data){
    $('#estadoUfMedico').html(data.uf);
    $('#estadoUfMedicoPost').val(data.uf);
    $('#cidadeMedico').html(data.localidade);
    $('#cidadeMedicoPost').val(data.localidade);
    $('#bairroMedico').html(data.bairro);
    $('#bairroMedicoPost').val(data.bairro);
    $('#enderecoMedico').html(data.logradouro); 
    $('#enderecoMedicoPost').val(data.logradouro); 
}