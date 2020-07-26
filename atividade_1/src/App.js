import React from 'react';
import './App.css';

import questao1 from './components/questao1';
import questao2 from './components/questao2';
import questao3 from './components/questao3/pai';
import questao4 from './components/questao4/pai';

function App() {
    return (
      <div className="App">
        <h1> Questões </h1>
        <questao1/>
        <questao2/>
        <questao3/>
        <questao4/>

      </div>
    );
}

export default App;
