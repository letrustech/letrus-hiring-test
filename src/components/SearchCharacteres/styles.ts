import styled, { css } from 'styled-components';

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteLarge} {
      width: 850px;
      margin-top: ${theme.spacings.huge};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.mediumGray};
      border-radius: 10px;
    }
    input {
      margin-right: 15px;
    }
    ,
    div {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
    }
    form {
      display: flex;
      align-items: center;
      justify-content: center;
    },
    a {
      color: ${theme.colors.primaryColor};
    },
  `}
`;
