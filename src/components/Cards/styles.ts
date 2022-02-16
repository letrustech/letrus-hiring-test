import styled, { css } from 'styled-components';

export const CardsContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteLarge} {
      max-width: 1440px;
      margin-top: ${theme.spacings.huge};
    }
    @media ${theme.media.lteMedium} {
      max-width: 90%;
      margin-top: ${theme.spacings.medium};
    }
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 30px;
  `}
`;
