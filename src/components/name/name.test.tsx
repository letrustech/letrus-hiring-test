import React from 'react'
import {render, screen } from '@testing-library/react'
import Name from './name'

describe('header: Name and Gender', () => {
	test('should render name', () => {
		render(<Name name='Rick' gender='male'/>)

		const name = screen.getByText('Rick')

		expect(name).toBeInTheDocument()
	})
	test('should render gender', () => {
		render(<Name name='Rick' gender='male'/>)

		const gender = screen.getByText('male')

		expect(gender).toBeInTheDocument()
	})
})