import React from 'react';
import styled from '@emotion/styled';
import etsyLogo from '../assets/vector/etsy-logo-only.svg';
import facebookLogo from '../assets/vector/facebook-logo-only.svg';
import instagramLogo from '../assets/vector/instagram-logo-only.svg';
import { screenWidthAt } from '../shared/utils';

const Container = styled.div`
  padding-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.div`
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

  p {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p:first-of-type {
    margin-top: 32px;
  }

  p:last-of-type {
    margin-bottom: 32px;
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;

  & > *:not(:last-child) {
    margin-right: 16px;
  }
`;

const SocialMediaImage = styled.img`
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
`;

const BlurbParagraph = styled.p`
  // TODO: make P

  font-size: 20px;
  width: 50%;
  max-width: 1000px;
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
`;

export const Greetings: React.FC = () => {
  return (
    <Container>
      <InnerContainer>
        Chelsea Erin Vaughan
        <SocialMediaLinks>
          <SocialMediaImage src={instagramLogo} onClick={() => window.open('https://www.instagram.com/thebrokengeneral/')} />
          <SocialMediaImage src={facebookLogo} onClick={() => window.open('https://www.facebook.com/cvaughanartworks')} />
        </SocialMediaLinks>
        <BlurbParagraph>
          Queens-based artist Chelsea Erin Vaughan has spent the last several years exploring color theory, mark making, and portraiture.
        </BlurbParagraph>
        <BlurbParagraph>
          Her process-driven work is expressed in multiple layers of decision-making where a feeling transforms a line into a shape, varied marks present
          texture, and color builds on emotion and mood.
        </BlurbParagraph>
        <BlurbParagraph>She produces her work at her studio in Sunnyside, Queens.</BlurbParagraph>
      </InnerContainer>
    </Container>
  );
};
