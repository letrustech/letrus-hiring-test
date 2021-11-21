import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home/home'
import Personagens from './views/personages/personagens'

import './App.scss'

const App: React.FC = () => {

	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/personagens" element={<Personagens/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
