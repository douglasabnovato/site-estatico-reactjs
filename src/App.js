import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Site from './Site';
import Rodape from './components/Rodape';
import Cabecalho from './components/Cabecalho';
import Inicio from './components/Inicio';
import Servicos from './components/Servicos';
import Portfolio from './components/Portfolio';


class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
            <Cabecalho />

            <Route path='/' exact component={Inicio} />
            <Route path='/servicos' component={Servicos}/>
            <Route path='/portfolio' component={Portfolio}/>
            
            <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
