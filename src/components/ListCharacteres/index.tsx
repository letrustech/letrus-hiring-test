import * as Styled from './styles';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { store } from '../../utils/store';
import { useState } from 'react';
import { loadCharacteres } from '../../store/reducers/reducer';
import { Cards } from '../Cards';
import { RickAndMortyDataType } from '../../data/interfaces';
import { useParams, Link } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';
import { env } from '../../environments';

export function ListCharacteres() {
  const state = useAppSelector(store.getState);
  const dispatch = useAppDispatch();

  const [dataFiltered, setDataFiltered] = useState<RickAndMortyDataType[]>();
  const params = useParams();
  const string = params.searchString;

  useState(() => {
    dispatch(loadCharacteres());
  });

  useState(() => {
    typeof string !== 'string'
      ? setDataFiltered(state.characteres.value)
      : setDataFiltered(
          state.characteres.value.filter(
            (item) =>
              typeof string === 'string' &&
              item.name.toLowerCase().includes(string.toLowerCase()),
          ),
        );
  });
  return (
    <Styled.Container>
      <Link to={env.ROUTER_UTILS.base.home} title="Back to search">
        <a>
          <BiArrowBack size={52} />
        </a>
      </Link>

      {dataFiltered && dataFiltered.length > 0 ? (
        <Cards characteres={dataFiltered} />
      ) : (
        <div className="character-not-found">
          <h1>Characteres not found</h1>
        </div>
      )}
    </Styled.Container>
  );
}
