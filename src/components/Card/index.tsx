import React from 'react';
import { Character } from '../../features/characters/characterSlice';
import './style.scss';
import StatusBadge from '../StatusBadge';

interface CardProps {
    character: Character;
}

const Card: React.FC<CardProps> = ({ character }) => {
    const cardStyles = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${character.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const slicedEpisodes = character.episode.slice(0, 5);

    return (
        <div className="card" style={cardStyles}>
            <div className="headerContainer">
                <div className="header">
                    <div className="h1">{character.name}</div>
                    <div className="capitalized">{character.gender}</div>
                </div>
                <div>
                    <div className="status">
                        <StatusBadge status={character.status} />
                        <div className="p1 ml1">{character.species}</div>
                    </div>
                </div>
            </div>
            <div className="episodes">
                <div className="h2">First 5 appearances:</div>
                {slicedEpisodes.map((episode) => <label>{episode}</label>)}
            </div>
        </div>
    );
};

export default Card;