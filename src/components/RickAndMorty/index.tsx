import { useCallback, useEffect, useRef, useState } from 'react';
import { EpisodeDataType, RickAndMortyDataType } from '../../data/interfaces';
import { getEpisodes } from '../../services';
import * as Styled from './styles';

export type RickAndMortyProps = {
  character: RickAndMortyDataType;
};

export const RickAndMorty = ({ character }: RickAndMortyProps) => {
  const isMounted = useRef(true);

  const [episodes, setEpisodes] = useState<EpisodeDataType[]>([]);

  const loadEpisodes = useCallback(async (characterEpisodes: string[]) => {
    const episodesParsed = await getEpisodes(characterEpisodes);
    setEpisodes(episodesParsed);
  }, []);
  useEffect(() => {
    if (isMounted.current) {
      loadEpisodes(character.episode);
    }

    return () => {
      isMounted.current = false;
    };
  }, [loadEpisodes, character.episode]);

  return (
    <Styled.CharacterContainer>
      <Styled.CharacterDataContent
        style={{
          background: `url(${character.image}) no-repeat center/100%`,
        }}
      >
        <div className="background-content">
          <div className="background-content__character-data">
            <div className="background-content__character-data__title">
              <div className="background-content__character-data__title-top">
                <div className="background-content__character-data__title-top__name">
                  <h1>{character.name}</h1>
                </div>
                <div className="background-content__character-data__title__species">
                  <div
                    className="background-content__character-data__title__species__status"
                    style={
                      character.status === 'Alive'
                        ? { backgroundColor: '#1CBC0E' }
                        : { backgroundColor: 'red' }
                    }
                  />
                  <p>{character.species}</p>
                </div>
              </div>
              <div>
                <p className="background-content__character-data__title__gender">
                  {character.gender}
                </p>
              </div>
            </div>
            <div className="background-content__character-data__body">
              <h3>First 5 appearances:</h3>
              {episodes.length > 0 &&
                episodes.map(
                  (episode, index) =>
                    index < 5 && (
                      <p
                        className="background-content__character-data__body__text"
                        key={index}
                      >
                        Episode {episode.id}: {episode.name} ({episode.air_date}
                        )
                      </p>
                    ),
                )}
            </div>
          </div>
        </div>
      </Styled.CharacterDataContent>
    </Styled.CharacterContainer>
  );
};
