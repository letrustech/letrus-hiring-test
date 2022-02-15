import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import characterReducer from '../store/reducers/reducer';

export const store = configureStore({
  reducer: {
    characteres: characterReducer,
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
