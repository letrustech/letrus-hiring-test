import React, { useEffect, useState } from "react";

interface AppearancesProps {
  episode: string;
  index: number;
}

interface AppearanceTypes {
  id: number;
  name: string;
  air_date: string;
}

const Appearance: React.FC<AppearancesProps> = ({
  episode,
  index,
}: AppearancesProps) => {
  const [appearance, setAppearance] = useState({} as AppearanceTypes);
  const [loading, setLoading] = useState(true);
  const episodeNumber =
    appearance.id < 10 ? `0${appearance.id}` : appearance.id;

  const getEpisodeInformation = async () => {
    const response = await fetch(episode);
    const data = await response.json();
    setAppearance(data);
    setLoading(false);
  };

  useEffect(() => {
    getEpisodeInformation();
  }, [episode]);

  return (
    <div>
      {loading ? (
        <p></p>
      ) : (
        <p data-tesid={`${index}-appearance`}>
          {`Episode ${episodeNumber}: ${appearance.name} (${appearance.air_date})`}
        </p>
      )}
    </div>
  );
};

export default Appearance;
