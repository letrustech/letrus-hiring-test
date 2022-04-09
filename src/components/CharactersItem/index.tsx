import React from 'react';
import './styles.scss';
const CharactersItem: React.FC = () => {
  return (
    <main>
      <div className='container'>
        <div className='card'>
          <img src="/assets/images/personagem.png" alt="Imagem do Personagem" />
          <div className='mask'></div>
          <div className='description'>
            <header>
              <div>status</div>
              <strong>Human</strong>
            </header>
            <section>
              <h1>Rick Sanchez</h1>
              <span>Male</span>
            </section>
            <footer>
              <h2>First 5 appearances:</h2>
              <p>Episode 01: Pilot (December 2, 2013)</p>
              <p>Episode 01: Pilot (December 2, 2013)</p>
              <p>Episode 01: Pilot (December 2, 2013)</p>
              <p>Episode 01: Pilot (December 2, 2013)</p>
              <p>Episode 01: Pilot (December 2, 2013)</p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CharactersItem;