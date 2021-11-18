import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export enum Status {
    Alive = 'Alive',
    Dead = 'Dead',
    Unknown = 'unknown',
}

export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Unknown = 'unknown',
}

export enum Species {
    Human = 'Human',
    Alien = 'Alien'
}

export interface Character {
    id: number;
    name: string;
    gender: Gender;
    status: Status;
    image: string;
    species: Species;
    episode: string[];
}

interface Response {
    results: Character[];
    info: {}; // could be used to paginate
}

interface CharacterSlice {
    characters: Response;
    status: string;
}

const initialState = {
    characters: {},
    status: 'idle',
} as CharacterSlice;

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    return await response.json();
});

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {}, // can add any other actions here
    extraReducers(builder) {
        builder.addCase(fetchCharacters.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.characters = action.payload;
        });
        builder.addCase(fetchCharacters.rejected, (state, action) => {
            state.status = 'failed';
        });
    }
});

export default charactersSlice.reducer;