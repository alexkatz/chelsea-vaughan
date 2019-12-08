import React from 'react';
import { Global, css } from '@emotion/core';

export const MasonryStyles: React.FC = () => (
  <Global
    styles={css`
      .my-masonry-grid {
        display: flex;
        margin-left: -30px; /* gutter size offset */
        width: auto;
      }
      .my-masonry-grid_column {
        padding-left: 30px; /* gutter size */
        background-clip: padding-box;
      }

      /* Style your items */
      .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
        background: grey;
        margin-bottom: 30px;
      }
    `}
  />
);