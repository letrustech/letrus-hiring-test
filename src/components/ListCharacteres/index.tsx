import * as Styled from './styles';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { store } from '../../utils/store';
import { useState } from 'react';
import { loadCharacteres } from '../../store/reducers/reducer';
import { Cards } from '../Cards';

export function ListCharacteres() {
  const state = useAppSelector(store.getState);
  const dispatch = useAppDispatch();

  useState(() => {
    dispatch(loadCharacteres());
  });
  console.log('characteres', state.characteres);
  return (
    <Styled.Container>
      {state.characteres.value.length > 0 ? (
        <Cards characteres={state.characteres.value} />
      ) : (
        <p>Characteres not found</p>
      )}
    </Styled.Container>
  );
}
