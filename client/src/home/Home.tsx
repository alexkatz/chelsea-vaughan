import React from 'react';
import styled from '@emotion/styled';
import Masonry from 'react-masonry-css';
import { imageNames, screenWidthAt } from '../shared/utils';
import { Constants } from '../shared/constants';
import { useWindowSize } from '../shared/hooks/useWindowSize';
import { motion } from 'framer-motion';

const Container = styled.div`
  grid-row-start: ${Constants.GRID.ROW.HOME_START};
  display: grid;
  grid-template-columns: auto 1200px auto;

  ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
    grid-template-columns: auto ${Constants.MEDIA_BREAKPOINTS.TABLET}px auto;
  }

  ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
    grid-template-columns: auto 100% auto;
  }

  ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.MOBILE)} {
    grid-template-columns: auto 100% auto;
  }
`;

const InnerContainer = styled.div`
  grid-column-start: 2;
`;

const PieceContainer = styled(motion.div)`
  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.2);
  transition: left 0.35s, top 0.35s;
`;

const PieceImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  display: block;
`;

export const Home: React.FC = () => {
  const imageUrls = imageNames.map(n => `image/${n}`);
  console.log(imageUrls);
  const { width } = useWindowSize();

  const columnCount = (() => {
    if (width >= Constants.MEDIA_BREAKPOINTS.SMALLER_DESKTOP) return 3;
    if (width >= Constants.MEDIA_BREAKPOINTS.TABLET) return 2;
    if (width < Constants.MEDIA_BREAKPOINTS.MOBILE) return 1;
    return 2;
  })();

  const scaleBoost = 1.01;
  return (
    <Container>
      <InnerContainer>
        <Masonry breakpointCols={columnCount} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
          {imageUrls.map(url => (
            <PieceContainer key={url} whileHover={{ scale: scaleBoost }} whileTap={{ scale: scaleBoost }}>
              <PieceImage src={url} />
            </PieceContainer>
          ))}
        </Masonry>
      </InnerContainer>
    </Container>
  );
};
