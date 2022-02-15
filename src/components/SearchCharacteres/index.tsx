import * as Styled from './styles';
import { FaSearch } from 'react-icons/fa';
import { env } from '../../environments';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SearchCharacteres() {
  const [string, setString] = useState('');
  const navigate = useNavigate();

  return (
    <Styled.SearchContainer>
      <h1>Characteres</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`${env.ROUTER_UTILS.base.characteres}/${string}`);
          }}
          data-testid="search-form"
        >
          <input
            autoFocus
            type="text"
            placeholder={`search by name`}
            value={string}
            onChange={(e) => setString(e.target.value)}
          />
          <FaSearch
            className="icon-pressable"
            onClick={(e) => {
              e.preventDefault();
              navigate(`${env.ROUTER_UTILS.base.characteres}/${string}`);
            }}
            size={32}
          />
        </form>
      </div>
    </Styled.SearchContainer>
  );
}
