import React from 'react'

import './name.scss'

interface Props {
  name: string,
  gender: string
}

const Name: React.FC<Props> = (props) => {
	const { name, gender} = props

	return (
		<div className="name--wrapper">
			<h1 className="name">{name}</h1>
			<p className="name__gender">{gender}</p>
		</div>
	)
}

export default Name
