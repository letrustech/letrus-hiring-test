import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import RickAndMortyService from '../../services/rick-and-morty-Service'

interface Location {
  name: string,
  url: string
}
export interface EpisodeInterface {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[]
}

export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: Location,
  location: Location,
  image: string,
  episode: string[],
  url: string,
  created: string
}

export type statusType = 'idle' | 'loading' | 'failed'

export interface Characters {
  list: Character[],
  status: statusType
}
const initialState: Characters = {
	list: [],
	status:'idle'
}

//criar characters service
export const fetchCharacters = createAsyncThunk(
	'characters/fetchCharacters',
	async(): Promise<Character[]> => {
		const response = await RickAndMortyService.getCharacters
		return response
	}
)

export const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers:{
		addCharacter: (state,action: PayloadAction<Character>) => {
			state.list.push(action.payload)
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCharacters.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchCharacters.fulfilled, (state, action) => {
				state.status = 'idle'
				state.list = action.payload
			})
			.addCase(fetchCharacters.rejected, state => {
				state.status = 'failed'
			})
	}
})

export const { addCharacter } = charactersSlice.actions

export default charactersSlice.reducer
