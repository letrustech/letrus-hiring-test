import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk, RootState } from '../../utils/store';

export interface Character {
    id: string,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
      name: string,
      url: string,
    },
    location: {
      name: string,
      url: string,
    },
    image: string,
    episode: Array<string>
    url: string,
    created: string,
}
interface StateRickAndMorty {
  characters: Array<Character>,
}

const initialState: StateRickAndMorty = {
  characters: [],
};

export const rickAndMortySlice = createSlice({
  name: 'rickAndMorty',
  initialState,
  reducers: {
    receiveCharacters: (state, action: PayloadAction<Array<Character>>) => {
      state.characters = [...state.characters, ...action.payload];
    },
  },
});

export default rickAndMortySlice.reducer;

export const { receiveCharacters } = rickAndMortySlice.actions;
export const rickAndMortySelector = (state: RootState) => state.rickAndMorty;

export const fetchCharacters = (page: number): AppThunk => async (dispatch: AppDispatch) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = await response.json();
  dispatch(receiveCharacters(data.results));
};
