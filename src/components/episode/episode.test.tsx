import React from 'react'
import {render, screen} from '@testing-library/react'
import Episode from './episode'


describe('Episode', () => {
	test('should render episode', async() => {
		render(<Episode url="https://rickandmortyapi.com/api/episode/2"/>)

		await setTimeout(() => {
			const episodeName = screen.getByText('Lawnmower Dog')
			expect(episodeName).toBeInTheDocument()
		},1000)

	})
})