import React from 'react'
import { useEffect } from 'react'
import CardList from '../../components/card-list/card-list'
import { fetchCharacters } from '../../store/characters/reducer'
import { getAllCharacters, getStatus } from '../../store/characters/selectors'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'

import './personagens.scss'

const Personagens: React.FC = () => {
	const dispatch = useAppDispatch()
	const characters = useAppSelector(getAllCharacters)
	const status = useAppSelector(getStatus)

	useEffect(() => {
		dispatch(fetchCharacters())
	},[])

	return (
		<section>
			<CardList characters={characters} />
			{status === 'failed' && <p className="personagens__fail">Not possible to load characters</p>}
		</section>  
	)
}

export default Personagens
