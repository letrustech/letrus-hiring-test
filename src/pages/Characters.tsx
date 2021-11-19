import React, { useEffect } from "react";
import { fetchCharacters, rickAndMortySelector } from "../store/reducers/reducer";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

const Characters: React.FC = () => {
  const dispatch = useAppDispatch();
  const rickAndMortyState = useAppSelector(rickAndMortySelector);

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])

  return (
    <div>
      <h1>{ rickAndMortyState.loading ? 'Carregando' : `${rickAndMortyState.characters[0].name }`}</h1>
    </div>
  );
};

export default Characters;