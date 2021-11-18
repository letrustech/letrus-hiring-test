import React, { useEffect } from 'react';
import { fetchCharacters } from './characterSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

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
                <h1>Loading ... - {status}</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>{status}</h1>
            <h2>{characters.results.map((character) => {
                <>
                    {console.log(character)}
                </>;
            })}</h2>
        </div>
    );
};

export default CharactersList;