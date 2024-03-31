import React from 'react';

import Rotas from './rotas';

import Navbar from '../components/navbar'

import Login from "../views/login"
import CadastroUsuario from '../views/cadastroUsuario';

import '../custom.css'

import 'bootswatch/dist/quartz/bootstrap.css'

class App extends React.Component {
  render() {
    return (

      <>
        <Navbar/>
        <div className='container'>
          <Rotas />
        </div>
      </>

    )
  }
}

export default App
