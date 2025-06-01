import styled from 'styled-components';

interface CardProps {
  layout?: 'listing' | 'grid';
}

export const Card = styled.div<CardProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  box-shadow: 0px 5px 10px 0px #00000040;
  /* width:  */
  width: 100%;
  max-width: ${({ layout }) => (layout === 'listing' ? '100%' : '371px')};
  flex-direction: ${({ layout }) => layout === 'grid' && 'column'};
  height: ${({ layout }) => (layout === 'listing' ? '176px' : '317px')};
  border-radius: 8px;
  margin-bottom: 21px;

  .box-image {
    padding: 14px;
    width: 100%;
    max-width: 150px;
    margin-right: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 127px;
    max-height: 138px;
    width: auto;
    height: auto;
  }

  .description {
    font-size: 12px;
    font-weight: 700;
    width: 100%;
    max-width: 600px;
    padding: 8px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: ${({ layout }) => (layout === 'listing' ? '100%' : '169px')};
    height: 176px;

    .box-image {
      max-width: ${({ layout }) => (layout === 'grid' ? '50px' : '70px')};
      padding: 2px;
    }

    img {
      max-width: ${({ layout }) => (layout === 'grid' ? '48px' : '59px')};
      max-height: 108px;
      width: auto;
      height: auto;
    }

    .description {
      font-size: ${({ layout }) => (layout === 'grid' ? '8px' : '12px')};

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      /* NÃO use white-space: nowrap */
      width: 100%; /* ou max-width definida */
      height: 50px;
    }
  }
`;

export const Wrapper = styled.div<CardProps>`
  display: flex;
  ${({ layout }) => layout === 'grid' && 'padding: 8px '};
  ${({ layout }) => layout === 'grid' && 'height: 185px'};

  @media (max-width: 768px) {
    ${({ layout }) => layout === 'grid' && 'height: 100px'};
  }
`;

export const Information = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: 'Lato', sans-serif;
  height: 100%;

  .description {
    font-size: 12px;
    font-weight: 700;
    width: 100%;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    .description {
      font-size: ${({ layout }) => (layout === 'grid' ? '8px' : '12px')};
    }
  }
`;

export const BuyInformation = styled.div<CardProps>`
  ${({ layout }) => layout === 'grid' && 'display: flex'};
  ${({ layout }) => layout === 'grid' && 'flex-direction: column'};
  height: 100%;

  .title {
    font-size: 16px;
    font-weight: 700;
  }

  .category {
    font-size: 12px;
    font-weight: 400;
    color: #7a7a7a;
    text-transform: capitalize;
  }

  .price {
    font-size: 36px;
    font-weight: 400;
    text-align: ${({ layout }) => layout === 'grid' && 'end'};
    margin-top: ${({ layout }) => layout === 'grid' && 'auto'};
  }

  @media (max-width: 768px) {
    .title {
      font-size: ${({ layout }) => (layout === 'grid' ? '10px' : '14px')};
    }

    .category {
      font-size: ${({ layout }) => (layout === 'grid' ? '8px' : '12px')};
    }

    .price {
      font-size: ${({ layout }) => (layout === 'grid' ? '14px' : '32px')};
    }
  }
`;

export const BuyButton = styled.button<CardProps>`
  width: 100%;
  height: ${({ layout }) => (layout === 'grid' ? '49px' : '100%')};
  max-width: ${({ layout }) => (layout === 'grid' ? '100%' : '49px')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b1a8e;

  @media (max-width: 768px) {
    height: ${({ layout }) => (layout === 'grid' ? '29px' : '100%')};

    svg {
      width: ${({ layout }) => layout === 'grid' && '14px'};
    }
  }
`;
