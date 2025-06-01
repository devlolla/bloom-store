import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 100%;
  max-width: 231px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* border: 1px solid red; */

  padding: 10px 5px;

  @media (max-width: 844px) {
    flex: 0 0 auto;
    max-width: 170px;
    height: 130px;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;

  .box-image {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #0b1a8e;
    border-radius: 10px;

    width: 100%;
    max-width: 101px;
    height: 101px;
    margin-right: 14px;
  }

  .box-image img {
    flex: none;

    max-width: 85%;
    max-height: 85%;
    width: auto;
    height: auto;
  }

  @media (max-width: 844px) {
    .box-image {
      height: 81px;
      margin-right: 4px;
    }
  }
`;

export const BuyInformation = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 90px;
  /* border: 1px solid green; */

  .discount-tag {
    width: 43px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #5062f0;
    border-radius: 100%;

    > p {
      font-size: 12px;
      color: #fff;
      text-align: center;
      font-weight: 700;
      line-height: 14px;
    }
  }

  .price-area {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .price-item {
    display: flex;
    align-items: center;

    > strong,
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 950px) {
    max-width: 78px;
    font-size: 13px;

    .price-item {
      > strong,
      p {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 844px) {
    /* max-width: 50px; */

    .discount-tag {
      width: 30px;
      height: 30px;

      > p {
        font-size: 10px;
        line-height: 12px;
      }
    }

    .price-item {
      > strong,
      p {
        font-size: 10px;
      }
    }
  }
`;

export const CatalogBuyButton = styled.button`
  width: 100%;
  /* max-width: 205px; */
  height: 24px;
  background-color: #0b1abe;
  border-radius: 6px;

  color: #fff;
  font-weight: 500;
  font-size: 16px;

  @media (max-width: 950px) {
    font-size: 14px;
  }
`;
