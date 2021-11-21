import React from 'react'
import {render, screen } from '@testing-library/react'
import Species from './species'

describe('Species Indicator', () => {
	test('should render species', () => {
		render(<Species species='Human' status='Alive'/>)

		const species = screen.getByText('Human')

		expect(species).toBeInTheDocument()
	})
})
