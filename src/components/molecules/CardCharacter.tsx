import React from "react";
import { Character } from "../../store/reducers/reducer";
import "../../styles/CardCharacter.scss";
import Appearance from "../atoms/Appearance";

interface CardCharacterProps {
  character: Character;
}

const CardCharacter: React.FC<CardCharacterProps> = ({
  character,
}: CardCharacterProps) => {
  return (
    <div
      data-testid="card"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${character.image})`,
      }}
      className="card"
    >
      <div className="header">
        <div className="title-container">
          <h1 className="title" data-testid="card-name">
            {character.name}
          </h1>
          <p className="gender" data-testid="card-gender">
            {character.gender}
          </p>
        </div>
        <div className="info-container">
          <div
            className={
              character.status === "Alive" ? "status-alive" : "status-dead"
            }
            data-testid="card-status"
          />
          <p className="specie" data-testid="card-species">
            {character.species}
          </p>
        </div>
      </div>
      <div className="main">
        <h1 className="appearance-title">First 5 appearances:</h1>
        <div className="appearance-container" data-testid="card-appearances">
          {character.episode
            .slice(0, 5)
            .map((episode: string, index: number) => (
              <Appearance key={episode} episode={episode} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;
