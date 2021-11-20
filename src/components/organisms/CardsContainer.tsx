import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import {
  fetchCharacters,
  rickAndMortySelector,
} from "../../store/reducers/reducer";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import CardCharacter from "../molecules/CardCharacter";

const CardsContainer: React.FC = () => {
  const [pageAPI, setPageAPI] = React.useState(1);
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const dispatch = useAppDispatch();
  const { characters } = useAppSelector(rickAndMortySelector);

  useEffect(() => {
    dispatch(fetchCharacters(pageAPI));
  }, [pageAPI]);

  useEffect(() => {
    if (inView) {
      setPageAPI((prevPage) => prevPage + 1);
    }
  }, [inView]);

  return (
    <section>
      {characters.map((character, index) => <CardCharacter key={index} character={character} />)}
      <div ref={ref} />
    </section>
  );
};

export default CardsContainer;