import React from 'react';
import Card from '../components/card'
import FormGroup from '../components/form-group';
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const IrParaCadasroUsuario = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/cadastro-usuarios');
    }
    return (
        <button onClick={handleNavigation} className='btn btn-danger'>Cadastrar</button>
    )
}



class Login extends React.Component {

    state = {
        email: '',
        senha: '',
        mensagemErro: null
    }

    entrar = () => {
        axios.post('http://localhost:8080/api/usuarios/autenticar', {
            email: this.state.email,
            senha: this.state.senha
        }).then(response => {

            window.location.href = '/telaInicial';

        }).catch(erro => {
            this.setState({ mensagemErro: erro.response.data.status })
        })
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className='row'>
                                <span>{this.state.mensagemErro}</span>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12">
                                    <div className='bs-component'>
                                        <fieldset>
                                            <FormGroup label="Email:*" htmlFor="exampleInputEmail1">
                                                <input type="email:" value={this.state.email}
                                                    onChange={e => this.setState({ email: e.target.value })}
                                                    className="form-control"
                                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    placeholder="Digite o Email" />
                                            </FormGroup>
                                            <FormGroup label="Senha:*" htmlFor="exampleInputPassword1">
                                                <input type="password"
                                                    value={this.state.senha}
                                                    onChange={e => this.setState({ senha: e.target.value })}
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    placeholder="Digite a senha" />
                                            </FormGroup>
                                            <div style={{ margin: '10px' }}>
                                                <button onClick={this.entrar} className='btn btn-success'>Entrar</button>
                                                <IrParaCadasroUsuario />
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login