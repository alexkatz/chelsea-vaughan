import React from 'react';
import { css } from '@emotion/core';
import Masonry from 'react-masonry-css';
import { imageNames } from '../shared/utils';

export const Home: React.FC = () => {
  const imageUrls = imageNames.map(n => `images/${n}`)
  return (
    <div
      css={css`
        grid-row-start: 2;
      `}
    >
      <Masonry
        css={css`
          padding-left: 40px;
          padding-right: 40px;
          padding-top: 20px;
        `}
        breakpointCols={2}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {imageUrls.map(url => (
          <div
            css={css`height: auto; width: 800px;`}
            key={url}
          >
            <img
              css={css`
              object-fit: contain;
              width: 100%;
              height: 100%;
            `}
              src={url}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};
