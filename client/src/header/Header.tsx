import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';

export const Header: React.FC = () => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 50px;
      grid-row-start: 1;
    `}
  >
    {Constants.HEADER_TITLE}
  </div>
);
