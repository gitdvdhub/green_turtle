import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const PaginaInicial = () => (
  <div>
    <h1>Escolha seu caminho em JavaScript</h1>

    <div className="conteudo-opcoes">
      <Link className="opcao-front-end" href='/front-end'>Front-end</Link>
      <Link className="opcao-back-end" href='/back-end'>Back-end</Link>
    </div>
    
  </div>
);

export default PaginaInicial;