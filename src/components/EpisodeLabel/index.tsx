import React, { useEffect, useState } from 'react';
import './style.scss';

interface EpisodeLabelProps {
    episodeUrl: string;
}

interface Episode {
    id: number;
    name: string;
    air_date: string;
}

const EpisodeLabel: React.FC<EpisodeLabelProps> = ({ episodeUrl }) => {
    const [episodeData, setEpisodeData] = useState<Episode>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${episodeUrl}`);

            setEpisodeData(await response.json());
        };
        fetchData();
    }, []);

    return (
        <p className="p">Episode {episodeData?.id}: {episodeData?.name} ({episodeData?.air_date})</p>
    );
};

export default EpisodeLabel;