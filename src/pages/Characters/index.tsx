import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { getCharacters } from "../../store/reducers/reducer";
import { RootState } from "../../utils/store";

import CharactersItem from "../../components/CharactersItem";

import "./styles.scss";

interface Episodes {
  id: string;
  name: string;
  air_date: string;
}

interface CharactersProps {
  id: string;
  name: string;
  species: string;
  gender: string;
  status: "Alive" | "unknown" | "Dead";
  image: string;
  episode: string[];
}

interface CharactersData {
  characters: {
    results: CharactersProps[];
  };
}

const Characters: React.FC = () => {
  const [episodes, setEpisodes] = useState<any[]>([]);

  const dispatch = useDispatch();
  const response = useSelector<RootState, CharactersData>(
    // @ts-ignore
    (state) => state.characters
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  function getEpisodes(episodes: any) {
    const showEpisodes = episodes.slice(0, 5);

    axios
      .all(showEpisodes.map((endpoint: any) => axios.get(endpoint)))
      .then((data) => setEpisodes(data));
  }

  return (
    <div className="item">
      {response?.characters?.results?.map((character) => (
        <CharactersItem
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          status={character.status}
          image={character.image}
          episode={getEpisodes(character.episode)}
          episodes={episodes}
        />
      ))}
    </div>
  );
};

export default Characters;
