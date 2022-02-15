import { SearchCharacteres } from './components/SearchCharacteres';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <Container>
      <SearchCharacteres />
    </Container>
  );
};

export default App;
