import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk, RootState } from '../../utils/store';

interface Character {
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
  loading: boolean,
}

const initialState: StateRickAndMorty = {
  characters: [],
  loading: true,
};

export const rickAndMortySlice = createSlice({
  name: 'rickAndMorty',
  initialState,
  reducers: {
    requestCharacters: (state) => {
      state.loading = true;
    },
    receiveCharacters: (state, action: PayloadAction<Array<Character>>) => {
      state.characters = action.payload;
      state.loading = false;
    },
  },
});

export default rickAndMortySlice.reducer;

export const { requestCharacters, receiveCharacters } = rickAndMortySlice.actions;
export const rickAndMortySelector = (state: RootState) => state.rickAndMorty;

export const fetchCharacters = (page: number = 1): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(requestCharacters());
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = await response.json();
  dispatch(receiveCharacters(data.results));
};
