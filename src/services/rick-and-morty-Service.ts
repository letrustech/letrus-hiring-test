import { Character } from "../store/characters/reducer"

const BASE_URL = 'https://rickandmortyapi.com/api'

const RickAndMortyService = {
  getCharacters: fetch(`${BASE_URL}/character`)
  .then(response => response.ok && response.json())
  .then(response => response.results as Character[])
}

export default RickAndMortyService