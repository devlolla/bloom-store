import styled from 'styled-components';

export const ContainerProductCard = styled.div`
  width: 100%;

  display: flex;

  font-family: 'Lato', sans-serif;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px #00000040;

  padding: 16px;

  .column {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    margin-left: 8px;
  }

  .box-image {
    max-width: 160px;
    height: 108px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #0b1a8e;
    padding: 6px 17px;
    border-radius: 10px;

    position: relative;

    img {
      width: auto;
      height: auto;

      max-width: 68px;
      max-height: 91px;
    }
  }

  .box-title {
    height: 50%;

    h3 {
      max-height: 50px;
      font-size: 13px;
      font-weight: 700;
    }
  }

  .box-price {
    height: 50%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .wrapper {
    height: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
  }

  .item {
    display: flex;
    gap: 4px;

    > strong,
    span {
      font-size: 16px;
    }

    input {
      width: 45px;
      height: 20px;

      background-color: #d9d9d9;
      border-radius: 4px;
      border: none;

      text-align: center;
      outline: none;
    }
  }

  .align-wrapper {
    display: flex;
    flex-direction: column;

    svg {
      cursor: pointer;
      margin-top: 10px;
    }
  }
`;

export const DiscountTag = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -13px;
  right: -7px;

  background-color: #5062f0;

  border-radius: 100%;

  color: #fff;
  font-weight: 700;
  font-size: 10px;
  text-align: center;
  line-height: 10px;
`;
