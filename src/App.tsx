import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "./utils/hooks";
import { fetchCharacters } from "./store/characters/reducer";
import { getAllCharacters, getStatus } from './store/characters/selectors';

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const characters = useAppSelector(getAllCharacters)
  const status = useAppSelector(getStatus)

  useEffect(() => {
    dispatch(fetchCharacters())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <h1>Hello, World!</h1>
      {status === 'idle' && characters.map( character => <p key={character.id}>{character.name}</p>)}
      {status === 'failed' && <p>Not possible to load characters</p>}
    </div>
  );
};

export default App;
