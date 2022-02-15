export interface RickAndMortyDataType {
  name: string;
  species: string;
  gender: string;
  status: string;
  image: string;
  episode: string[];
}

export interface EpisodeDataType {
  id: number;
  name: string;
  air_date: string;
}
