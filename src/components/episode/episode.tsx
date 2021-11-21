import React, { useState, useEffect } from 'react'
import RickAndMortyService from '../../services/rick-and-morty-Service'
import { EpisodeInterface } from '../../store/characters/reducer'

import './episode.scss'

interface Props {
  url: string,
}

const Episode: React.FC<Props> = (props) => {
	const { url } = props
	const episodeId = Number(url.substr(-2).replace('/',''))
	const [currentEpisode, setCurrentEpisode] = useState<EpisodeInterface>()
  
	useEffect(() => {
		RickAndMortyService.getEpisode(episodeId)
			.then(response => {
				setCurrentEpisode(response)
			})
	},[episodeId])
  
	return (
		<p className="episode">{`
      Episode ${currentEpisode?.episode.substr(-2)}:
      ${currentEpisode?.name} 
      (${currentEpisode?.air_date})
      `}
		</p>
	)
}

export default Episode
