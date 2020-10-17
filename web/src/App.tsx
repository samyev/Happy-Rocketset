import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './images/Logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo animal</h1>
          <p>
            Adote, encontre clínicas veterinárias, abrigos para animais. 
            Ou faça do seu lar, um abrigo temporário.
          </p>
        </main>

        <div className="location">
         <strong>Sobral</strong>
         <span>Ceará</span> 
        </div>

        <a href="/#" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default App;
