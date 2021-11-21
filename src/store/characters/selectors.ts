import { RootState } from '../../utils/store'
import { Character, statusType } from './reducer'

export const getAllCharacters = (state: RootState): Character[] => state.characters.list
export const getCharacterById = (id: number) => (state: RootState): Character | undefined => 
	state.characters.list.find(character => character.id === id)

export const getStatus = (state: RootState): statusType => state.characters.status