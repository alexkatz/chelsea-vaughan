import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import { mediaAt as screenWidthAt } from '../shared/utils';
import { useWindowSize } from '../shared/hooks/useWindowSize';
import { useWindowScrollPosition } from '../shared/hooks/useWindowScrollPosition';

const BOTTOM_MARGIN = 64;

export const Greetings: React.FC = () => {
  const height = useWindowSize().height - BOTTOM_MARGIN;
  const halfHeight = height / 2;
  const { y } = useWindowScrollPosition({ throttleWait: 4 });
  const scrollPercent = y < height ? y / height : 1;
  return (
    <div
      css={css`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: ${height - BOTTOM_MARGIN}px;
      grid-row-start: ${Constants.GRID.ROW.GREETINGS_START};
      text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
      padding-left: 16px;
      padding-right: 16px;
      text-align: left;
    `}
    >
      <div
        style={{
          top: halfHeight * scrollPercent,
          opacity: 1 - (scrollPercent - .05),
        }}
        css={css`
          height: 60px;
          position: relative;
          z-index: -1;
          font-size: 60px;

          ${screenWidthAt(620)} {
            font-size: 45px;
          }
          ${screenWidthAt(480)} {
            font-size: 30px;
          }

          ${screenWidthAt(400)} {
            font-size: 20px;
          }
      `}
      >
        {Constants.HEADER_TITLE}
      </div>
    </div>
  );
};
