import styled, { css } from 'styled-components';

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteLarge} {
      width: 850px;
      margin-top: ${theme.spacings.huge};
    }
    @media ${theme.media.lteMedium} {
      width: 90%;
      margin-top: ${theme.spacings.medium};
      input {
        width: 70%;
        margin-left: 5px;
        font-size: ${theme.font.sizes.medium};
        &::placeholder {
          font-size: ${theme.font.sizes.medium};
        }
      }
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.mediumGray};
    border-radius: 10px;
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
