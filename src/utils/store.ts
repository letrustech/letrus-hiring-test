import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import charactersReducer from '../store/characters/reducer'

export const store = configureStore({
	reducer: {
		characters: charactersReducer,
	}
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
