import styled from 'styled-components';

export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  margin-top: 12px;
`;

export const CommentCount = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Lato', sans-serif;

  > span {
    font-size: 14px;
    font-weight: 600;
    padding-left: 3px;
  }

  margin-bottom: 42px;
  margin-top: 6px;

  @media (max-width: 425px) {
    > span {
      font-size: 10px;
    }
    margin-bottom: 30px;
  }
`;
