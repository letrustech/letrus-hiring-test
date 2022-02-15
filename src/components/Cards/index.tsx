import { RickAndMortyDataType } from '../../data/interfaces';
import { RickAndMorty } from '../RickAndMorty';
import * as Styled from './styles';

type CardsProps = {
  characteres: RickAndMortyDataType[];
};

export const Cards = ({ characteres }: CardsProps) => (
  <Styled.CardsContainer>
    {characteres.map((character, index) => (
      <RickAndMorty key={index} character={character} />
    ))}
  </Styled.CardsContainer>
);
