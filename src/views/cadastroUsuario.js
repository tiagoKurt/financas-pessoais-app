import React from "react";

import Card from "../components/card";
import FormGroup from "../components/form-group";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const VoltarParaOLogin = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/login');

    }
    return (
        <button onClick={handleNavigation} className='btn btn-danger'>Voltar</button>
    )
}


class CadastroUsuario extends React.Component {

    state = {
        nome: "",
        email: "",
        senha: "",
        senhaRepetida: "",
        mensagemErro : null
    }

    cadastrar = () => {
        axios.post('http://localhost:8080/api/usuarios', {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            senhaRepetida: this.state.senhaRepetida
        }).then(response =>{
            console.log(response)
        }).catch(erro =>{
            this.setState({mensagemErro : erro.response.data.status})
        })
    }

    render() {
        return (
            <Card title="Cadastro de usuário">
                <div className="row">
                    <span>{this.state.mensagemErro}</span>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text"
                                    id="inputNome"
                                    className="form-control"
                                    name="nome"
                                    onChange={e => this.setState({ nome: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="email"
                                    id="inputEmail"
                                    className="form-control"
                                    name="email"
                                    onChange={e => this.setState({ email: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password"
                                    id="inputSenha"
                                    className="form-control"
                                    name="senha"
                                    onChange={e => this.setState({ senha: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Repita a senha: *" htmlFor="inputSenhaRepetida">
                                <input type="password"
                                    id="inputSenhaRepetida"
                                    className="form-control"
                                    name="senha"
                                    onChange={e => this.setState({ senhaRepetida: e.target.value })} />
                            </FormGroup>
                            <div style={{ margin: '10px' }}>
                                <button onClick={this.cadastrar} type="button" className="btn btn-success" >Salvar</button>
                                <VoltarParaOLogin />
                            </div>

                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default CadastroUsuario