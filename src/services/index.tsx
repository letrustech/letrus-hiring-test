import axios from 'axios';
import { EpisodeDataType, RickAndMortyDataType } from '../data/interfaces';

const baseUrl = 'https://rickandmortyapi.com/api/character';

export async function getCharacteres(): Promise<RickAndMortyDataType[]> {
  const response = await axios.get(baseUrl);
  return response.data.results;
}
export async function getEpisodes(
  characterEpisodes: string[],
): Promise<EpisodeDataType[]> {
  const promisses = characterEpisodes.map((episode) => {
    return axios.get(episode).then(({ data }) => {
      return data;
    });
  });
  const data = await Promise.all(promisses);

  return data;
}
