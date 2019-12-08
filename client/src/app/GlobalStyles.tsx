import React from 'react';
import { Global, css } from '@emotion/core';
import { Constants } from '../shared/constants';

export const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      html {
        background-color: black;
        color: white;
      }
      
      html, body, #root {
        height: 100%;
        margin: 0;
      }

      #root {
        display: grid;
        grid-template-rows: ${Constants.HEADER_SIZE}px auto;
        grid-template-columns: auto;
      }

    `}
  />
);