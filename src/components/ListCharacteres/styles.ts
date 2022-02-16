import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteLarge} {
      max-width: 60%;
      margin-top: ${theme.spacings.huge};
    }
    @media ${theme.media.lteMedium} {
      max-width: 90%;
      margin-top: ${theme.spacings.medium};
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    min-height: 100vh;
    .character-not-found {
      display: flex;
      width: 100%;
      justify-content: center;
      background: ${theme.colors.mediumGray};
      border-radius: 10px;
    }
  `}
`;
