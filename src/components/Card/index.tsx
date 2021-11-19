import React from 'react';
import { Character } from '../../features/characters/characterSlice';
import './style.scss';
import StatusBadge from '../StatusBadge';
import EpisodeLabel from '../EpisodeLabel';

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

    // used to catch only the first 5 episodes (or less)
    const slicedEpisodes = character.episode.slice(0, 5);

    return (
        <div className="card" style={cardStyles}>
            <div className="headerContainer">
                <div className="header">
                    <div className="h1">{character.name}</div>
                    <div className="capitalized p2">{character.gender}</div>
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
                {slicedEpisodes.map((episode) => <EpisodeLabel episodeUrl={episode} />)}
            </div>
        </div>
    );
};

export default Card;