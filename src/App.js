import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BarraPesquisa from './componentes/barrapesquisa';
import TabMenu from './componentes/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
                
        <BarraPesquisa />
        <TabMenu />

      </div>
    );
  }
}

export default App;
