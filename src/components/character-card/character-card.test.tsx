import React from 'react'
import {render, screen } from '@testing-library/react'
import { Character } from '../../store/characters/reducer'
import CharacterCard from './character-card'

describe('Character Card', () => {
	const rick: Character = {
		id:	1,
		name:	'Rick Sanchez',
		status:	'Alive',
		species: 'Human',
		type:	'',
		gender:	'Male',
		origin:	{
			name:	'Earth (C-137)',
			url:	'https://rickandmortyapi.com/api/location/1'
		},
		location:{
			name:	'Citadel of Ricks',
			url:	'https://rickandmortyapi.com/api/location/3'
		},	
		image:	'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
		episode: [
			'https://rickandmortyapi.com/api/episode/1',
			'https://rickandmortyapi.com/api/episode/2',
			'https://rickandmortyapi.com/api/episode/3',
			'https://rickandmortyapi.com/api/episode/4',
			'https://rickandmortyapi.com/api/episode/5',
		],	
		url:	'https://rickandmortyapi.com/api/character/1',
		created: '2017-11-04T18:48:46.250Z',
	}
	test('should render', () => {
		render(<CharacterCard character={rick} />)
    
		const card = screen.getByTestId('character-card')

		expect(card).toBeInTheDocument()
	})

	test('should render Name', () => {
		render(<CharacterCard character={rick} />)

		const name = screen.getByText('Rick Sanchez')

		expect(name).toBeInTheDocument()
	})

	test('should render species', () => {
		render(<CharacterCard character={rick} />)

		const species = screen.getByText('Human')

		expect(species).toBeInTheDocument()
	})

	test('should render appearences', () => {
		render(<CharacterCard character={rick} />)

		const appearencesList = screen.getByTestId('appearences-list')

		expect(appearencesList).toBeInTheDocument()
		expect(appearencesList.children.length).toEqual(5)
	})

	test('should render background image', () => {
		render(<CharacterCard character={rick} />)

		const image = screen.getByRole('img')

		expect(image).toHaveAttribute('src',rick.image)
	})
})