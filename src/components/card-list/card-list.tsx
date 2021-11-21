import React from 'react'
import { Character } from '../../store/characters/reducer'
import CharacterCard from '../character-card/character-card'

import './card-list.scss'

interface Props {
  characters: Character[]
}

const CardList: React.FC<Props> = (props) => {
	const { characters } = props

	return (
		<div className="card-list" data-testid="card-list">
			{characters?.map(character => <CharacterCard key={character.id} character={character}/>)}
		</div>
	)
}

export default CardList
