import { RootState } from "../../utils/store";

export const getAllCharacters = (state: RootState) => state.characters.list
export const getCharacterById = (id: number) => (state: RootState) => 
  state.characters.list.find(character => character.id === id)

export const getStatus = (state: RootState) => state.characters.status