import React from 'react';
import { Global, css } from '@emotion/core';
import { Constants } from '../shared/constants';

export const MasonryStyles: React.FC = () => (
  <Global
    styles={css`
      .my-masonry-grid {
        display: flex;
        margin-left: -${Constants.MASONRY_GUTTER}px; /* gutter size offset */
        width: auto;
      }
      .my-masonry-grid_column {
        padding-left: ${Constants.MASONRY_GUTTER}px; /* gutter size */
        background-clip: padding-box;
      }

      /* Style your items */
      .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
        margin-bottom: ${Constants.MASONRY_GUTTER}px;
      }
    `}
  />
);