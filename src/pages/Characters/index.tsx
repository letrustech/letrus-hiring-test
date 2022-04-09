import React from 'react';

import CharactersItem from '../../components/CharactersItem';

import './styles.scss';

const Characters: React.FC = () => {
  return (
    <div className="item">
      <CharactersItem />
      <CharactersItem />
      <CharactersItem />
      <CharactersItem />
      <CharactersItem />
    </div>
  );
};

export default Characters;
