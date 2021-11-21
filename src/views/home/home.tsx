import React from 'react'
import { Link } from 'react-router-dom'

import './home.scss'

const Home: React.FC = () => {

	return (
		<section className="home">
			<h1 className="home__title">To see Rick and Morty Characters go to</h1> 
			<Link className="home__link" to="/personagens"> Characters Page</Link>
		</section>
    
	)
}

export default Home
