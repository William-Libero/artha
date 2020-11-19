const bcrypt = require('bcryptjs');

class ArthaDao{
    constructor(connection){
        this._connection = connection;
    }

    cadastroUsuarioPaciente(usuario){
        const hash = bcrypt.hashSync(usuario.senha, 10);
        return new Promise ((resolve, reject) => {
            this._connection.query(
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
    }

    login(dados){
        return new Promise ((resolve, reject) => {
            this._connection.query("SELECT * FROM usuario WHERE email = ?", [dados.email],
                (error, rows) => {
                    console.log(rows[0]);
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
            this._connection.query("SELECT * FROM usuario WHERE id_usuario = ?", [id],
                (error, usuario) => {
                    if(error) return reject(console.log(error));

                    return resolve(usuario);
                }
            )
        });
    }

    getUsuarioPeloEmail(email) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                "SELECT * FROM usuario WHERE email = ?",
                [email],
                (erro, usuario) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuário!');
                    }
                    JSON.stringify(usuario);
                    return resolve(usuario);
                }
            )
        });
    }

}

module.exports = ArthaDao;