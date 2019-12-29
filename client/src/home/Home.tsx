import React from 'react';
import { css } from '@emotion/core';
import Masonry from 'react-masonry-css';
import { imageNames, mediaAt } from '../shared/utils';
import { Constants } from '../shared/constants';
import { useWindowSize } from '../shared/hooks/useWindowSize';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  const imageUrls = imageNames.map(n => `image/${n}`)
  const columnCount = (() => {
    const { width, height } = useWindowSize();
    if (width >= Constants.MEDIA_BREAKPOINTS.SMALLER_DESKTOP) return 3;
    if (width >= Constants.MEDIA_BREAKPOINTS.TABLET) return 2;
    if (width < Constants.MEDIA_BREAKPOINTS.MOBILE) return 1;
    return 2;
  })();
  const scaleBoost = 1.01;
  return (
    <div
      css={css`
        grid-row-start: ${Constants.GRID.ROW.HOME_START};
        display: grid;
        grid-template-columns: auto 1200px auto;

        ${mediaAt(Constants.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
          grid-template-columns: auto ${Constants.MEDIA_BREAKPOINTS.TABLET}px auto;
        }
        
        ${mediaAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
          grid-template-columns: auto 100% auto;
        }

        ${mediaAt(Constants.MEDIA_BREAKPOINTS.MOBILE)} {
          grid-template-columns: auto 100% auto;
        }
      `}
    >
      <div css={css`grid-column-start: 2;`}>
        <Masonry
          breakpointCols={columnCount}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          {imageUrls.map(url => (
            <motion.div
              key={url}
              whileHover={{ scale: scaleBoost }}
              whileTap={{ scale: scaleBoost }}
              css={css`
                box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.2);
                transition: left 0.35s, top 0.35s;
              `}
            >
              <img
                css={css`
                  object-fit: contain;
                  width: 100%;
                  height: 100%;
                  display: block;
            `}
                src={url}
              />
            </motion.div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};
