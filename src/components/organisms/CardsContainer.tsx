import React, { useEffect } from "react";
import {
  fetchCharacters,
  rickAndMortySelector,
} from "../../store/reducers/reducer";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Loading from "../atoms/Loading";
import CardCharacter from "../molecules/CardCharacter";

const CardsContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { characters, loading } = useAppSelector(rickAndMortySelector);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  if (loading) return <Loading />;

  return (
    <section>
      {characters.map((character, index) => <CardCharacter key={index} character={character} />)}
    </section>
  );
};

export default CardsContainer;