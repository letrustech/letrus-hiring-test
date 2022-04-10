import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../services/api';

const initialState = {
  characters: [],
  loading: false,
};

export const getCharacters = createAsyncThunk(
  'characters/getCharacters',
  async () => {
    const response = await api.get('character');
    return response.data;
  }
);

export const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
    });
  },
});

const { reducer } = characterSlice;
export default reducer;
