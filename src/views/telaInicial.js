import React from "react";

class TelaInicial extends React.Component {
    
    state = {
        saldo : 0
    }

    render() {
        return (
            <div className="jumbotron">
                <h3 className="display-3">Bem vindo!</h3>
                <p className="lead">Você poderá administrar suas finanças ou de sua empresa.</p>
                <p className="display-3">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
                <hr className="my-4"/>
                    <p >E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="/cadastro-usuarios" role="button"><i className="fa fa-users"></i>  Cadastrar Usuário</a>
                        <a className="btn btn-danger btn-lg" href="https://bootswatch.com/flatly/#" role="button"><i className="fa fa-users"></i>  Cadastrar Lançamento</a>
                    </p>
            </div>
        )
    }
}

export default TelaInicial