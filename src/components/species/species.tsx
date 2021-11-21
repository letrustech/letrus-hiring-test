import React from 'react'

import './species.scss'

interface Props {
  species: string,
  status: string
}

const Species: React.FC<Props> = (props) => {
	const { species, status} = props

	return (
		<header className="species--wrapper">
			<span className="species__status" data-status={status}></span>
			<p className="species">{species}</p>
		</header>
	)
}

export default Species
