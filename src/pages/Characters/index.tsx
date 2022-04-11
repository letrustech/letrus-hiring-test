import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCharacters } from "../../store/reducers/reducer";
import { RootState } from "../../utils/store";

import CharactersItem from "../../components/CharactersItem";

import "./styles.scss";

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
  const dispatch = useDispatch();
  const response = useSelector<RootState, CharactersData>(
    // @ts-ignore
    (state) => state.characters
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  const render = useCallback(() => {
    return response?.characters?.results?.map((character) => {
      return (
        <CharactersItem
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          status={character.status}
          image={character.image}
          episodes={character.episode}
        />
      );
    });
  }, [response]);

  return <div className="item">{render()}</div>;
};

export default Characters;
