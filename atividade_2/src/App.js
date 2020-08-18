import React from 'react';
import './App.css';

import Arena from './Componentes/questao1e2/Arena';
import Hero from './Componentes/questao1e2/Hero';
//import Emeny from './Componentes/questao1e2/Emeny';

function App() {
  return (
    <div className="App">
      <Arena arena='Arena bruta'>
        <Hero name="Hero" imagem="/harley-quinn-robbie.jpeg"/>
        /*<Emeny name="Emeny" imagem="/mulherMaravillha.jpeg"/>*/
      </Arena>
    </div>
  );
}

export default App;
/mulherMaravillha.jpeg