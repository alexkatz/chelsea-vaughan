import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import { mediaAt } from '../shared/utils';

export const About: React.FC = () => (
  <div
    css={css`
      grid-row-start: ${Constants.GRID.ROW.ABOUT_START};
      margin-left: 25%;
      margin-right: 25%;
      margin-top: 400px;
      margin-bottom: 400px;
      text-align: center;
      font-family: 'SulphurPoint-Regular', Arial, Helvetica, sans-serif;
      font-size: large;

      ${mediaAt(620)} {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    `}
  >
    <p>Chelsea is an artist. Check out her art. And suck it.</p>

  </div>
);