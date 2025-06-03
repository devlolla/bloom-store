import styled from 'styled-components';

export const ContainerCardPrice = styled.div`
  width: 100%;
  height: 100%;
  max-height: 233px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  padding: 23px 37px;
  position: relative;

  .wrapper-from {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: line-through;
    gap: 8px;

    > strong {
      font-size: 36px;
    }

    > span {
      font-size: 32px;
      font-weight: 400;
    }
  }
  transition: 0.4s;

  .wrapper-to {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    > strong {
      font-size: 38px;
    }

    > span {
      font-size: 38px;
      font-weight: 400;
    }
  }

  @media (max-width: 850px) {
    padding: 27px 33px;
    height: auto;
    max-height: auto;
    width: auto;
    transition: 0.4s;

    .wrapper-from {
      strong,
      span {
        font-size: 28px;
      }
    }

    .wrapper-to {
      strong,
      span {
        font-size: 32px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 17px 23px;
    height: auto;
    max-height: auto;
    width: auto;

    transition: 0.4s;
  }

  @media (max-width: 550px) {
    padding: 10px 24px;
    transition: 0.4s;

    .wrapper-from {
      strong,
      span {
        font-size: 20px;
      }
    }

    .wrapper-to {
      strong,
      span {
        font-size: 24px;
      }
    }
  }

  @media (max-width: 375px) {
    padding: 10px 24px;
    transition: 0.4s;

    .wrapper-from {
      strong,
      span {
        font-size: 16px;
      }
    }

    .wrapper-to {
      strong,
      span {
        font-size: 18px;
      }
    }
  }
`;

export const DiscountTag = styled.div`
  width: 70px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -13px;
  right: -31px;

  background-color: #5062f0;

  border-radius: 100%;

  color: #fff;
  font-weight: 700;
  font-size: 23px;
  text-align: center;
  line-height: 24px;

  @media (max-width: 1050px) {
    width: 60px;
    height: 60px;
    font-size: 18px;
    line-height: 20px;
    right: -25px;
  }

  @media (max-width: 550px) {
    right: -6px;
    width: 40px;
    height: 40px;
    font-size: 12px;
    line-height: 12px;
  }
`;

export const BuyButton = styled.button`
  width: 100%;
  padding: 14px 40px;
  color: #fff;
  font-size: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: #0b1a8e;
  border-radius: 10px;

  margin-top: 5px;

  @media (max-width: 1050px) {
    font-size: 18px;
  }

  @media (max-width: 550px) {
    font-size: 14px;

    padding: 12px;
  }

  @media (max-width: 375px) {
    padding: 10px;
  }
`;

export const NoDiscount = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    font-size: 24px;
  }

  > strong {
    font-size: 96px;
    line-height: 100px;
  }

  @media (max-width: 425px) {
    > strong {
      font-size: 80px;
      line-height: 70px;
    }
  }

  @media (max-width: 375px) {
    > strong {
      font-size: 50px;
      line-height: 60px;
    }
  }
`;
