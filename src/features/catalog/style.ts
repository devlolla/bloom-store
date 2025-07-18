import styled from 'styled-components';

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerCarousel = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff !important;
  box-shadow: 0px 4px 4px 0px #00000040;

  .title {
    font-size: 18px;
    font-weight: 700;
    color: #0b1a8e;
    width: fit-content;
    background-color: transparent;
    padding-left: 10px;
  }

  .wrapper-clothing {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    background-color: transparent;
    transition: 0.3s;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    max-width: 1050px;
  }

  @media (max-width: 950px) {
    .wrapper-clothing {
      gap: 15px;
      transition: 0.3s;
    }
  }

  @media (max-width: 844px) {
    .box {
      gap: 15px;
    }

    .wrapper-clothing {
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 8px;

      scrollbar-width: thin;
      scrollbar-color: #5062f0 #eee;
    }
  }
`;

interface ContainerListingProps {
  layout: 'listing' | 'grid';
}

export const ContainerListing = styled.div<ContainerListingProps>`
  width: 100%;
  max-width: ${({ layout }) => (layout === 'listing' ? '1050px' : '100%')};

  display: flex;
  justify-content: ${({ layout }) => layout === 'grid' && 'space-evenly'};
  flex-direction: ${({ layout }) => (layout === 'listing' ? 'column' : 'row')};
  flex-wrap: ${({ layout }) => (layout === 'listing' ? 'unset' : 'wrap')};

  gap: ${({ layout }) => layout === 'grid' && '21px'};
  margin: 80px 60px 30px 60px;

  @media (max-width: 768px) {
    gap: ${({ layout }) => layout === 'grid' && '8px'};
  }
`;

export const CarouselWrapper = styled.div`
  overflow-x: auto;
  display: flex;
  gap: 16px;
  scroll-snap-type: x mandatory;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    height: 8px;
  }
`;

export const CarouselBox = styled.div`
  display: flex;
  gap: 16px;
`;
