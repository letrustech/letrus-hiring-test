import React, { useState, useEffect } from "react";
import { api } from "../../services/api";

import "./styles.scss";

interface Episodes {
  id: string;
  name: string;
  air_date: string;
}

interface CharactersProps {
  name: string;
  species: string;
  gender: string;
  status: "Alive" | "unknown" | "Dead";
  image: string;
  episode: any;
  episodes: any;
}

const CharactersItem: React.FC<CharactersProps> = ({
  name,
  status,
  image,
  species,
  gender,
  episode,
  episodes,
}) => {
  console.log(episodes);

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
                {/* <li>teste1</li>
                <li>teste2</li>
                <li>teste3</li> */}
                {/* {episodes.length &&
                  episodes.map((episode) => (
                    <li key={episode.id}>
                      Episode 0{episode.id}: {episode.name} ({episode.air_date})
                    </li>
                  ))} */}
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CharactersItem;
