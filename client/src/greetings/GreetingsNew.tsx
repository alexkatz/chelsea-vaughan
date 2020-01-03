import React from 'react';
import { css } from '@emotion/core';
import etsyLogo from '../assets/vector/etsy-logo-only.svg';
import facebookLogo from '../assets/vector/facebook-logo-only.svg';
import instagramLogo from '../assets/vector/instagram-logo-only.svg';
import { screenWidthAt } from '../shared/utils';

export const GreetingsNew: React.FC = () => {
  return (
    <div
      css={css`
        padding-top: 32px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 60px;
          text-align: center;
          margin-left: 8px;
          margin-right: 8px;

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
        Chelsea Erin Vaughan
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 16px;
          `}
        >
          {
            [instagramLogo, facebookLogo, etsyLogo].map((svg, index, array) => (
              <img 
                key={index}
                css={css`
                  height: 30px;

                  ${screenWidthAt(620)} {
                    height: 25px;
                  }
                  ${screenWidthAt(480)} {
                    height: 25px;
                  }

                  ${screenWidthAt(400)} {
                    height: 15px;
                  }
                  
                  cursor: pointer;

                  :hover {
                    opacity: 0.6;
                  }

                  transition: opacity 0.35s;

                  ${index < array.length - 1 && (css`
                    margin-right: 16px;
                  `)}
                `}
                src={svg}
              />
            ))
          }
        </div>
        <div
          css={css`
            font-size: 20px;
            text-align: center;
            width: 50%;
            max-width: 1000px;
            margin-top: 64px;
            margin-bottom: 64px;
            font-family: 'SulphurPoint-Regular', Arial, Helvetica, sans-serif;

            ${screenWidthAt(620)} {
              font-size: 15px;
              margin-top: 32px;
              margin-bottom: 32px;
            }
            ${screenWidthAt(480)} {
              font-size: 15px;
            }

            ${screenWidthAt(400)} {
              font-size: 12px;
              margin-top: 16px;
              margin-bottom: 16px;
            }
          `}
        >
        Queens-based artist, Chelsea Vaughan, has spent the last several years exploring color theory, mark making and the continuous line to produce bold paintings and vibrant visuals. Her process-driven work is expressed in multiple layers of decision-making where a feeling transforms a line into a shape, varied marks present texture, and color builds on emotion and mood. She produces her work at her studio in Sunnyside, Queens.
        </div>
      </div>
    </div>
  );
};