import React from 'react'
import { Character } from '../../store/characters/reducer'
import Appearences from '../appearences/appearences'
import Name from '../name/name'
import Species from '../species/species'

import './character-card.scss'

interface Props {
  character: Character
}

const CharacterCard: React.FC<Props> = (props) => {
	const { character } = props

	return (
		<div className="character-card--wrapper" data-testid="character-card">
			<section className="character-card__content">
				<header className="character-card__header">
					<Name name={character.name} gender={character.gender} />
					<Species species={character.species} status={character.status} />
				</header>
				<Appearences appearences={character.episode}/>
			</section>
			<img className="character-card__img" src={character.image} alt={`${character.name} images`} />
		</div>
	)
}

export default CharacterCard
