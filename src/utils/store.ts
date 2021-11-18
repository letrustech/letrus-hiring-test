import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import characterReducer from '../features/characters/characterSlice';

export const store = configureStore({
  reducer: {
    charactersState: characterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
