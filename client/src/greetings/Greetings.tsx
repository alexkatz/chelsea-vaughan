import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import { mediaAt as screenWidthAt } from '../shared/utils';
import { useWindowSize } from '../shared/hooks/useWindowSize';
import { useWindowScrollPosition } from '../shared/hooks/useWindowScrollPosition';
import facebookLogo from '../assets/vector/facebook-logo.svg';
import instagramLogo from '../assets/vector/instagram-logo.svg';
import etsyLogo from '../assets/vector/etsy-logo.svg';

const LOGOS = [facebookLogo, instagramLogo, etsyLogo];

const SIDE_MARGIN = 16;

export const Greetings: React.FC = () => {
  const { height: windowHeight, width: windowWidth } = useWindowSize();
  const isLandscape = windowWidth > windowHeight;
  const BOTTOM_MARGIN_FACTOR = isLandscape ? 0.20 : 0.70;
  const greetingsHeight = windowHeight - (windowHeight * BOTTOM_MARGIN_FACTOR);
  const halfHeight = greetingsHeight / 2;
  const { y: scrollY } = useWindowScrollPosition({ throttleWait: 4 });
  const scrollPercent = scrollY < greetingsHeight ? scrollY / greetingsHeight : 1;
  return (
    <div
      css={css`
      position: relative;
      height: ${greetingsHeight}px;
      grid-row-start: ${Constants.GRID.ROW.GREETINGS_START};
      text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
      text-align: left;
    `}
    >
      <div // top half
        style={{ height: halfHeight }}
        css={css`
          position: fixed;
          display: flex;
          align-items: center;
          /* background-color: rgba(30, 40, 50, 0.3); */
          justify-content: center;
          max-width: 100%;
          min-width: 100%;
        `}
      >
        <div
          style={{
            opacity: 1 - (scrollPercent + 0.6),
            transform: `translateY(${-scrollY * 0.25}px)`,
          }}
          css={css`
            z-index: -1;
            transition: ease-out 0.05s;
            font-size: 20px;
            text-align: right;
            max-width: 100%;
            margin-left: 20%;
            max-height: ${halfHeight}px;
            margin-top: ${SIDE_MARGIN}px;
            margin-right: ${SIDE_MARGIN}px;

            ${screenWidthAt(620)} {
              font-size: 15px;
            }
          `}
        >
          Queens-based artist, Chelsea Vaughan, has spent the last several years exploring color theory, mark making and the continuous line to produce bold paintings and vibrant visuals. Her process-driven work is expressed in multiple layers of decision-making where a feeling transforms a line into a shape, varied marks present texture, and color builds on emotion and mood. She produces her work at her studio in Sunnyside, Queens. Check her out on instagram @cvaughanartworks.
      </div>
        <div
          style={{
            opacity: 1 - (scrollPercent + 0.2),
            transform: `translateY(${-scrollY * 0.5}px)`,
          }}
          css={css`
            position: absolute;
            min-width: 100%;
            max-width: 100%;
            text-align: center;
            transition: ease-out 0.05s;
            z-index: -1;
            font-size: 60px;
            bottom: -30px;
            height: 60px;

            ${screenWidthAt(620)} {
              font-size: 45px;
            }
            ${screenWidthAt(480)} {
              font-size: 40px;
            }

            ${screenWidthAt(400)} {
              font-size: 35px;
            }
        `}
        >
          {Constants.HEADER_TITLE}
        </div>
      </div>
      <div // second half
        style={{
          height: halfHeight,
          top: halfHeight,
        }}
        css={css`
          position: fixed;
          display: flex;
          /* background-color: rgba(10, 20, 30, 0.5); */
          align-items: center;
          justify-content: center;
          max-width: 100%;
          min-width: 100%;
        `}
      >
        <div // social media logos
          style={{
            transform: `translateY(${-scrollY * 0.75}px)`,
            opacity: 1 - (scrollPercent + 0.2),
          }}
          css={css`
            display: flex;
            transition: ease-out 0.05s;
            align-items: center;
            justify-content: center;
          `}
        >
          {
            LOGOS.map((svg, index) => (
              <img
                key={index}
                src={svg}
                css={css`

                  ${index < LOGOS.length - 1 && (css`
                    margin-right: 32px;
                  `)};
                  
                  height: 30px;
                  opacity: 0.6;

                  ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.MOBILE)} {
                    height: 15px;
                  }
                `}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};
