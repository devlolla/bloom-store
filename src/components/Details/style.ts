import styled from 'styled-components';

export const WrapperGrid = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1050px) {
    display: none;
  }

  @media (max-width: 425px) {
    .description-wrapper {
      .label {
        font-size: 24px;
      }

      .description {
        padding: 10px;
        background-color: #d9d9d9;
        font-size: 12px;
        color: #000;
        border-radius: 20px;
        width: 100%;
      }

      .description::first-letter {
        text-transform: uppercase;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .information {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-top: 32px;

    .box {
      display: flex;
      flex-direction: column;
    }

    .sku {
      display: flex;
      gap: 10px;

      > strong,
      span {
        font-size: 32px;
      }
    }

    .category {
      display: flex;
      flex-direction: column;
      line-height: 30px;
      padding: 8px;
      > strong {
        font-size: 30px;
      }

      > span {
        font-size: 18px;
        text-transform: uppercase;
      }
    }
  }

  .label {
    font-size: 32px;
    font-weight: 700;
    color: #000;
    text-align: left;
  }

  .description {
    padding: 14px 17px;
    background-color: #d9d9d9;
    font-size: 12px;
    color: #000;
    border-radius: 20px;
    width: 100%;
  }

  @media (max-width: 425px) {
    .information {
      .sku {
        > strong,
        span {
          font-size: 23px;
        }
      }

      .category {
        padding: 0px;

        > strong {
          font-size: 23px;
        }

        > span {
          font-size: 20px;
        }
      }
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 16px;
  font-family: 'Lato', sans-serif;
  margin: 0 auto;

  @media (max-width: 1050px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const LargeCard = styled.div`
  grid-row: 1 / 4;
  grid-column: 1 / 2;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  order: 1;

  .box-image {
    border: 1px solid #0b1a8e;
    border-radius: 20px;
    padding: 23px 37px;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      max-width: 284px;
      max-height: 406px;
      width: auto;
      height: auto;
    }
  }

  @media (max-width: 1050px) {
    grid-row: auto;
    grid-column: auto;
    justify-content: center;

    .box-image > img {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 600px) {
    grid-row: auto;
    grid-column: auto;
    justify-content: center;

    .box-image {
      padding: 12px;
      > img {
        max-width: 180px;
        height: auto;
      }
    }
  }
`;

export const MidCardTop = styled.div`
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  order: 2;
  padding-left: 20px;

  .sku {
    display: flex;
    gap: 10px;

    > strong,
    span {
      font-size: 32px;
    }
  }

  .category {
    display: flex;
    flex-direction: column;
    line-height: 30px;

    > strong {
      font-size: 30px;
    }

    > span {
      font-size: 18px;
      text-transform: uppercase;
    }
  }

  @media (max-width: 1050px) {
    display: none;

    grid-row: auto;
    grid-column: 1fr 1fr;
    order: 3;

    .sku > strong,
    .sku > span,
    .category > strong {
      font-size: 20px;
    }

    .category > span {
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    grid-row: auto;
    grid-column: auto;

    .sku {
      flex-direction: column;
      align-items: flex-start;

      > strong,
      span {
        font-size: 20px;
      }
    }

    .category {
      line-height: 24px;
      > strong {
        font-size: 18px;
      }

      > span {
        font-size: 14px;
      }
    }
  }
`;

export const MidCardBottom = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 4;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  order: 3;

  @media (max-width: 1050px) {
    grid-row: auto;
    grid-column: auto;

    order: 2;
  }

  @media (max-width: 850px) {
    grid-row: auto;
    grid-column: auto;
    justify-content: center;

    order: 2;
  }
`;

export const BottomCard = styled.div`
  grid-row: 3 / 4;
  grid-column: 2 / 4;
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  order: 4;
  padding-left: 20px;

  .label {
    font-size: 32px;
    font-weight: 700;
    color: #000;
    text-align: left;
  }

  .description {
    padding: 14px 17px;
    background-color: #d9d9d9;
    font-size: 12px;
    color: #000;
    border-radius: 20px;
  }

  @media (max-width: 1050px) {
    display: none;

    grid-row: auto;
    grid-column: auto;

    .label {
      font-size: 24px;
      text-align: center;
    }

    .description {
      font-size: 12px;
      text-align: center;
    }
  }
`;
