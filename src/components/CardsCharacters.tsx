import React, { useEffect } from "react";
import {
  fetchCharacters,
  rickAndMortySelector,
} from "../store/reducers/reducer";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import Appearance from "./Appearance";
import Loading from "./Loading";

const CardsCharacters: React.FC = () => {
  const dispatch = useAppDispatch();
  const { characters, loading } = useAppSelector(rickAndMortySelector);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  if (loading) return <Loading />;

  return (
    <section>
      <div
        data-testid="card"
        style={{
          backgroundImage: `url(${characters[0].image})`,
          backgroundSize: "cover",
        }}
      >
        <div>
          <div>
            <div>
              <h1 data-testid="card-name">{characters[0].name}</h1>
              <p data-testid="card-gender">{characters[0].gender}</p>
            </div>
            <div>
              <div data-testid="card-status">{characters[0].status}</div>
              <p data-testid="card-species">{characters[0].species}</p>
            </div>
          </div>
        </div>
        <div>
          <h1>First 5 appearances:</h1>
          <div data-testid="card-appearances">
            {characters[0].episode
              .slice(0, 5)
              .map((episode: string, index: number) => (
                <Appearance key={episode} episode={episode} index={index} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsCharacters;
