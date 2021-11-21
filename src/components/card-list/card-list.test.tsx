import React from 'react'
import { screen, render } from '@testing-library/react'
import { Character } from '../../store/characters/reducer'
import CardList from './card-list'


describe('cards list', () => {
	const characters: Character[] = [
		{
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
		},
		{
			id:	2,
			name:	'Morty Smith',
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
			url:	'https://rickandmortyapi.com/api/character/2',
			created: '2017-11-04T18:48:46.250Z',
		}
	]
	test('should render cards', () => {
		render(<CardList characters={characters}/>)

		const cardList = screen.getByTestId('card-list')

		expect(cardList.children.length).toEqual(2)
	})
})