import React from 'react'
import Episode from '../episode/episode'

import './appearences.scss'

interface Props {
  appearences: string[],
  showLimit?: number
}

const Appearences: React.FC<Props> = (props) => {
	const { appearences, showLimit = 5 } = props
	const actualAppearences = appearences.slice(0, showLimit)
	return (
		<header className="appearences--wrapper">
			<h2 className="appearences__title">First 5 appearences:</h2>
			<ul className="appearences__list" data-testid='appearences-list'>
				{actualAppearences?.map(appearence => 
					<li key={appearence} className="appearences__item">
						<Episode url={appearence}/>
					</li>
				)}
			</ul>
		</header>
	)
}

export default Appearences
