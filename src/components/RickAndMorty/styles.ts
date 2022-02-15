import styled, { css } from 'styled-components';

export const CharacterContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 100ms ease-in-out;
    :hover {
      transform: scale(1.05);
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const CharacterDataContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 290px;
    border-radius: 10px;

    .background-content {
      border-radius: 10px;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
    }
    .background-content__character-data {
      padding: 0 10px;
    }
    .background-content__character-data__title {
      display: flex;
      flex-direction: column;
      .background-content__character-data__title__gender {
        margin-bottom: 0;
      }
    }
    .background-content__character-data__title__species {
      display: flex;
      align-items: center;
    }
    .background-content__character-data__title__species__status {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 5px;
    }
    .background-content__character-data__title-top {
      display: flex;
      justify-content: space-between;
      height: 45px;
    }
    .background-content__character-data__body {
      margin: 0;
      height: 100%;
      h3 {
        margin-top: 25px;
        margin-bottom: 5px;
      }
    }
    .background-content__character-data__body__text {
      margin: 0;
      margin-bottom: 5px;
      font-size: ${theme.font.sizes.xsmall};
    }
    /* .type-content {
      display: flex;
      margin-bottom: 10px;
    } */
    /* .type {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 5px;
      width: 110px;
      height: 30px;
      p {
        font-size: ${theme.font.sizes.xsmall};
        font-weight: bold;
      }
    } */
  `};
`;
