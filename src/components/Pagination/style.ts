// Pagination.styles.ts
import styled, { css } from 'styled-components';

export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding-bottom: 60px;
`;

type PaginationItemProps = {
  selected?: boolean;
  disabled?: boolean;
  isDots?: boolean;
};

export const PaginationItem = styled.li<PaginationItemProps>`
  width: 32px;
  height: 32px;

  margin: auto 4px;
  padding: 0 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  color: #0b1a8e;
  text-align: center;
  font-weight: 700;

  border: 1px solid #0b1a8e;
  box-sizing: border-box;
  border-radius: 11px;
  line-height: 1.43;

  cursor: pointer;

  ${({ isDots }) =>
    isDots &&
    css`
      &:hover {
        background-color: transparent;
        cursor: default;
      }
    `}

  ${({ selected }) =>
    selected &&
    css`
      background-color: #0b1a8e;
      color: #fff;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;

      .arrow::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
      }

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    `}
`;

export const Arrow = styled.div<{ direction: 'left' | 'right' }>`
  &::before {
    content: '';
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
    position: relative;
  }

  ${({ direction }) =>
    direction === 'left'
      ? css`
          transform: rotate(-135deg) translate(-50%);
        `
      : css`
          transform: rotate(45deg);
        `}
`;
