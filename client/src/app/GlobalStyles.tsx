import React from 'react';
import { Global, css } from '@emotion/core';
import { Constants } from '../shared/constants';
import sulphurPointLight from '../assets/font/SulphurPoint-Light.ttf';
import sulphurPointRegular from '../assets/font/SulphurPoint-Regular.ttf';
import backgroundImage from '../assets/image/grannys-garden-5.jpg';

export const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'sulphurPoint-Light';
        src: url(${sulphurPointLight});
      }

      @font-face {
        font-family: 'SulphurPoint-Regular';
        src: url(${sulphurPointRegular});
      }
      body {
        background-color: rgb(230, 240, 250);
        background-image: linear-gradient(180deg, rgb(230, 240, 250) 0%, rgb(30, 40, 50) 70%);
        color: black;
        font-family: 'SulphurPoint-Light', Arial, Helvetica, sans-serif;
      }
      
      html, body, #root {
        margin: 0;
        position: relative;
      }

      #background-image-container {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        filter: blur(40px) grayscale(100%) invert(100%);
      }

      #background-image {
        width: 100%;
        height: 100%;
        background-image: url(${backgroundImage});
        background-repeat: repeat;
        background-size: contain;
        background-position: top;
        opacity: 0;

      }

      div {
        cursor: default;
      }

      #root {
        display: grid;
        grid-template-rows: 
          [${Constants.GRID.ROW.GREETINGS_START}] auto 
          [${Constants.GRID.ROW.HOME_START}] auto;
      }
    `}
  />
);