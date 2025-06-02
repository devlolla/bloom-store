import styled from 'styled-components';

export const Title = styled.div`
  width: 100%;
  background-color: #f2f3f8;
  padding: 10px 120px;

  display: flex;
  align-items: center;

  > h2 {
    font-size: 24px;
    color: #010311;
    font-weight: 700;
  }

  @media (max-width: 1134px) {
    padding: 10px 70px;

    > h2 {
      font-size: 20px;
    }
  }

  @media (max-width: 1134px) {
    padding: 26px 70px;
  }

  @media (max-width: 1050px) {
    padding: 16px 48px;
  }

  @media (max-width: 550px) {
    padding: 16px 23px;
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 13px;
    }
  }
`;

export const ContainerMain = styled.div`
  width: 100%;
  padding: 26px 80px;

  @media (max-width: 1134px) {
    padding: 26px 70px;
  }

  @media (max-width: 1050px) {
    padding: 16px 48px;
  }

  @media (max-width: 550px) {
    padding: 16px 23px;
  }
`;
