import { Character, EpisodeInterface } from '../store/characters/reducer'

const BASE_URL = 'https://rickandmortyapi.com/api'

const RickAndMortyService = {
	getCharacters: fetch(`${BASE_URL}/character`)
		.then(response => response.ok ? response.json(): Promise.reject())
		.then(response => response.results as Character[]),

	getEpisode: (episode: number): Promise<EpisodeInterface> => fetch(`${BASE_URL}/episode/${episode}`)
		.then(response => response.ok ? response.json(): Promise.reject())
		.then(response => response as EpisodeInterface),
}

export default RickAndMortyService