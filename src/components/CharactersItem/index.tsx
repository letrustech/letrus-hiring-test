import React from "react";

import "./styles.scss";

interface Props {
  name: string;
  species: string;
  gender: string;
  status: "Alive" | "unknown" | "Dead";
  image: string;
}

const CharactersItem: React.FC<Props> = ({
  name,
  status,
  image,
  species,
  gender,
}) => {
  return (
    <main>
      <div className="container">
        <div className="card" style={{ backgroundImage: `url(${image})` }}>
          <div className="description">
            <header>
              <div></div>
              <strong>{species}</strong>
            </header>
            <section>
              <h1>{name}</h1>
              <span>{gender}</span>
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
