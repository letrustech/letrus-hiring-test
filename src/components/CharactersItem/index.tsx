import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.scss';

interface CharactersProps {
  name: string;
  species: string;
  gender: string;
  status: 'Alive' | 'unknown' | 'Dead';
  image: string;
  episodes: string[];
}

const CharactersItem: React.FC<CharactersProps> = ({
  name,
  status,
  image,
  species,
  gender,
  episodes,
}) => {
  const [episodeList, setEpisodeList] = useState<any[]>([]);

  useEffect(() => {
    async function getEpisodes(episodes: string[]) {
      const filteredList = episodes.slice(0, 5);
      const request = filteredList.map((url: string) => {
        return axios.get(url);
      });
      const answer = await axios.all([
        request[0],
        request[1],
        request[2],
        request[3],
        request[4],
      ]);
      setEpisodeList(answer);
    }
    getEpisodes(episodes);
  }, []);

  return (
    <main>
      <div className="container">
        <div className="card" style={{ backgroundImage: `url(${image})` }}>
          <div className="description">
            <header>
              <div
                style={
                  status !== 'Alive'
                    ? { background: 'var(--status-red)' }
                    : { background: 'var(--status-green)' }
                }
              />
              <strong>{species}</strong>
            </header>
            <section>
              <h1>{name}</h1>
              <span>{gender}</span>
            </section>
            <footer>
              <h2>First 5 appearances:</h2>
              <ul>
                {episodeList.map((item) => {
                  if (item) {
                    return (
                      <li key={item.data.id}>
                        Episode 0{item.data.id}: {item.data.name} (
                        {item.data.air_date})
                      </li>
                    );
                  }
                })}
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CharactersItem;
