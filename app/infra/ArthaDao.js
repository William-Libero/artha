const bcrypt = require('bcryptjs');
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host: 'br182.hostgator.com.br',
  user: 'evidence_dev',
  password: 'evidence_dev1',
  database: 'evidence_artha'
});

class ArthaDao{
    cadastroUsuario(usuario){
        if(usuario.tipoUsuario == "paciente"){
            const hash = bcrypt.hashSync(usuario.senha, 10);
            return new Promise ((resolve, reject) => {
                pool.query(
                    'INSERT INTO usuario (nome, sobrenome, email, senha, cpf, rg, dt_nasc, telefone, cep, endereco, endereco_numero, bairro, complemento, estado_uf, cidade, nome_contato, telefone_contato) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                    [
                        usuario.nome,
                        usuario.sobrenome,
                        usuario.email,
                        hash,
                        usuario.cpf,
                        usuario.rg,
                        usuario.dtNascimento,
                        usuario.telefone,
                        usuario.cep,
                        usuario.enderecoPost,
                        usuario.numeroEndereco,
                        usuario.bairroPost,
                        usuario.complemento,
                        usuario.estadoUfPost,
                        usuario.cidadePost,
                        usuario.nomeContato, 
                        usuario.telContato
                    ],
                    (error, resultado) => {
                        if(error) return reject(console.log(error));

                        return resolve(resultado);
                    }
                )
            });
        }else if(usuario.tipoUsuario == "medico"){
            const hash = bcrypt.hashSync(usuario.senhaMedico, 10);
            return new Promise ((resolve, reject) => {
                pool.query(
                    'INSERT INTO medico (nome, sobrenome, email, senha, cpf, rg, dt_nasc, telefone, cep, endereco, endereco_numero, bairro, complemento, estado_uf, cidade, crm) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                    [
                        usuario.nomeMedico,
                        usuario.sobrenomeMedico,
                        usuario.emailMedico,
                        hash,
                        usuario.cpfMedico,
                        usuario.rgMedico,
                        usuario.dtNascimentoMedico,
                        usuario.telefoneMedico,
                        usuario.cepMedico,
                        usuario.enderecoMedicoPost,
                        usuario.numeroMedico,
                        usuario.bairroMedicoPost,
                        usuario.complementoMedico,
                        usuario.estadoUfMedicoPost,
                        usuario.cidadeMedicoPost,
                        usuario.crmMedico
                    ],
                    (error, resultado) => {
                        if(error) return reject(console.log(error));

                        return resolve(resultado);
                    }
                )
            });
        }
    }

    editaPaciente(usuario){
        var doencas_auto_adquiridas = 
            usuario.hipertencao+","+
            usuario.tabagismo+","+
            usuario.estresse+","+
            usuario.sedentarismo+","+
            usuario.diabetes+","+
            usuario.colesterol;
        
        return new Promise ((resolve, reject) => {
            pool.query(
                "UPDATE usuario SET tipo_sanguineo = ?, plano_saude = ?, alergias = ?, remedios = ?, doencas_auto_adquiridas = ?, qrcode = ? WHERE id_usuario = ?",
                [
                    usuario.tipoSanguineo,
                    usuario.planoDeSaude,
                    usuario.alergia,
                    usuario.remedio,
                    doencas_auto_adquiridas,
                    null,
                    usuario.idUsuario
                ],
                (error, resultado) => {
                    if(error) return reject(console.log(error));

                    return resolve(resultado);
                }
            )
        });
    }

    login(dados){
        return new Promise ((resolve, reject) => {
            pool.query("SELECT * FROM usuario WHERE email = ?", [dados.email],
                (error, rows) => {
                    if(typeof rows[0] !== 'undefined'){
                        if(rows[0].id_usuario > 0){
                            console.log(rows[0]);
                            const match = bcrypt.compareSync(dados.senha, rows[0].senha);
                            if(match){
                                return resolve(rows[0]);
                            }else{
                                var loginInvalido = true;
                                return reject(loginInvalido);
                            }
                        }else{
                            var loginInvalido = true;
                            return reject(loginInvalido);
                        }
                    }else{
                        var loginInvalido = true;
                        return reject(loginInvalido);
                    }
                }
            )
        });
    }

    getUsuario(id){
        return new Promise ((resolve, reject) => {
            pool.query("SELECT * FROM usuario WHERE id_usuario = ?", [id],
                (error, usuario) => {
                    if(error) return reject(console.log(error));

                    return resolve(usuario);
                }
            )
        });
    }

    getMedico(id){
        return new Promise ((resolve, reject) => {
            pool.query("SELECT * FROM medico WHERE id_medico = ?", [id],
                (error, medico) => {
                    if(error) return reject(console.log(error));

                    return resolve(medico);
                }
            )
        });
    }

    getUsuarioPeloEmail(email) {
        return new Promise((resolve, reject) => {
            pool.query(
                "SELECT * FROM usuario WHERE email = ?",
                [email],
                (erro, usuario) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuário!');
                    }
                    JSON.stringify(usuario);
                    if(usuario.length <= 0){
                        pool.query(
                            "SELECT * FROM medico WHERE email = ?",
                            [email],
                            (erro, usuario) => {
                                if (erro) {
                                    return reject('Não foi possível encontrar o usuário!');
                                }
                                JSON.stringify(usuario);
                                return resolve(usuario);
                            }
                        )
                    }else{
                        return resolve(usuario);
                    }
                }
            )
        });
    }

}

module.exports = ArthaDao;