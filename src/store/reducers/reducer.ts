import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RickAndMortyDataType } from '../../data/interfaces';
import { getCharacteres } from '../../services/';
import { AppDispatch, AppThunk } from '../../utils/store';

export interface StateType {
  value: RickAndMortyDataType[];
}

const initialState = { value: [] } as StateType;

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    load: (state, action: PayloadAction<RickAndMortyDataType[]>) => {
      state.value = action.payload;
    },
  },
});

export const { load } = characterSlice.actions;

export const loadCharacteres =
  (): AppThunk => async (dispatch: AppDispatch) => {
    const characteres = await getCharacteres();
    dispatch(load(characteres));
  };
export const selectCharacter = (state: StateType) => state.value;

export default characterSlice.reducer;
