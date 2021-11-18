import React, { useEffect } from 'react';
import { fetchCharacters } from '../characterSlice';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import './styles.scss';
import Card from '../../../components/Card';

const CharactersList: React.FC = () => {
    const dispatch = useAppDispatch();
    const characters = useAppSelector((state) => state.charactersState.characters);
    const status = useAppSelector((state) => state.charactersState.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCharacters());
        }
    }, [dispatch]);

    if (status === 'failed') {
        return (
            <div>
                <h1>Error 404</h1>
            </div>
        );
    }

    if (status !== 'succeeded') { //[TODO]: style loading
        return (
            <div>
                <h1>Loading ...</h1>
            </div>
        );
    }

    return (
        <div className="cards">
            {characters.results.map((character) =>
                <Card key={character.id} character={character} />
            )}
        </div>
    );
};

export default CharactersList;