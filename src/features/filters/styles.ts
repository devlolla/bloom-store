import styled from 'styled-components';

export const ContainerFilters = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 11px;

  padding: 0 16px;

  background-color: #f2f3f8;
`;

export const StyledSelect = styled.select`
  border: none;
  border-radius: 5px;
  background-color: transparent;

  color: #333;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  text-decoration: underline;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const ContainerIcons = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
`;
