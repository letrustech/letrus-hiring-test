import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 1440px;
    margin: 0 auto;
    min-height: 100vh;
    padding: 30px;
    .character-not-found {
      display: flex;
      justify-content: center;
      background: ${theme.colors.mediumGray};
      border-radius: 10px;
    }
  `}
`;
