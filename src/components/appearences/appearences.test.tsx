import React from 'react'
import { render, screen } from '@testing-library/react'
import Appearences from './appearences'

describe('appearences list', () => {
	const firstAppearence = 'Episode 01: Pilot(December 2, 2013);'
	const secondAppearence = 'Episode 02: Lawnmower Dog(December 9, 2013);'
	const thirdAppearence = 'Episode 03: Anatomy Park(December 16, 2013);'

	test('should render appearences', async() => {
		render(<Appearences appearences={[firstAppearence]}/>)

		await setTimeout(() => {
			const appearence = screen.getByText('Episode 01: Pilot(December 2, 2013);')
			expect(appearence).toBeInTheDocument()
		}, 1000)

	})

	test('should render correct ammount of appearences', async() => {
		render(<Appearences appearences={[firstAppearence, secondAppearence, thirdAppearence]} showLimit={2}/>)

		await setTimeout(() => {
			const appearencesList = screen.getByTestId('appearences-list')
			expect(appearencesList.children.length).toEqual(2)
		}, 1000)
	})
})