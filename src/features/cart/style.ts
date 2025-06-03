import styled from 'styled-components';

interface ContainerCartProps {
  visible: boolean;
}

export const ContainerCart = styled.div<ContainerCartProps>`
  width: 100%;
  height: calc(100% - 73px);
  background-color: rgba(0, 0, 0, 0.45);

  position: fixed;
  bottom: 0;
  ${props => (props.visible ? `display: flex;` : `display: none;`)}

  align-items: flex-end;
  justify-content: flex-end;
  z-index: 2;
  overflow: hidden;

  @media (max-width: 857px) {
    height: calc(100% - 116px);
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 409px;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  &::-webkit-scrollbar {
    width: 3px;
    background: #f4f4f4;
  }
  &::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;

interface TotalProps {
  alignItems?: boolean;
}

export const Total = styled.div<TotalProps>`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: ${({ alignItems }) =>
    alignItems ? 'space-between' : 'flex-end'};

  gap: 4px;

  padding: 5px 16px;

  background-color: #d9d9d9;

  button {
    font-weight: 700;
    padding: 4px;
    border-radius: 4px;
    background-color: #fff;

    &:hover {
      background-color: #f2f3f8;
    }
  }
`;
