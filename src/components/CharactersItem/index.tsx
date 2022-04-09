import React from 'react';

import './styles.scss';

const CharactersItem: React.FC = () => {
  return (
    <main>
      <div className="container">
        <div className="card">
          {/* <div className="mask"></div> */}
          <div className="description">
            <header>
              <div></div>
              <strong>Human</strong>
            </header>
            <section>
              <h1>Rick Sanchez</h1>
              <span>Male</span>
            </section>
            <footer>
              <h2>First 5 appearances:</h2>
              <ul>
                <li>Episode 01: Pilot (December 2, 2013)</li>
                <li>Episode 01: Pilot (December 2, 2013)</li>
                <li>Episode 01: Pilot (December 2, 2013)</li>
                <li>Episode 01: Pilot (December 2, 2013)</li>
                <li>Episode 01: Pilot (December 2, 2013)</li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CharactersItem;
