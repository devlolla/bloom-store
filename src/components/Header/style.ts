import styled from 'styled-components';

export const ContainerHeader = styled.div`
  width: 100%;
  background-color: #5062f0;
  padding: 11px 120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;

  gap: 24px;

  div {
    order: 1;
  }

  input {
    order: 2;
  }

  svg {
    order: 3;
  }

  @media (max-width: 857px) {
    gap: 9px;
    padding: 12px 16px;

    > div {
      order: 3;
    }
    > svg {
      order: 2;
    }
    > h1 {
      order: 1;
    }
  }
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;

  @media (max-width: 425px) {
    font-size: 1.75rem;
  }
`;
