import React, { Component } from 'react';


import Site from './Site';
import Rodape from './components/Rodape';
import Cabecalho from './components/Cabecalho';
import Inicio from './components/Inicio';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Cabecalho />
          <Inicio />
          <Site />
          <Rodape />
      </div>
    );
  }
}

export default App;
