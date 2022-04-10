import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getCharacters } from "../../store/reducers/reducer";
import { RootState } from "../../utils/store";

import CharactersItem from "../../components/CharactersItem";

import "./styles.scss";

interface Props {
  id: string;
  name: string;
  species: string;
  gender: string;
  status: "Alive" | "unknown" | "Dead";
  image: string;
}

interface CharactersData {
  characters: {
    results: Props[];
  };
}

const Characters: React.FC = () => {
  const dispatch = useDispatch();
  const response = useSelector<RootState>(
    (state) => state.characters
  ) as CharactersData;

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

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
        />
      ))}
    </div>
  );
};

export default Characters;
