import React from 'react';

import { Colors } from 'consts/colors';
import styled from 'styled-components';

export interface AboutUsCardType {
  colouredTitle: string;
  title: string;
  color: string;
  icon: string;
  paragraph: string;
}

const StyledCardWrapper = styled.div`
  position: relative;
  padding: 80px 25px 30px;
`;

const StyledCard = styled.div`
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 8px 24px rgba(2, 23, 39, 0.2);
  position: relative;
  background-color: ${Colors.white};
`;

const StyledColouredTitle = styled.div.attrs((props: any) => ({
  color: props.color,
}))`
  font-weight: 500;
  font-size: 28px;
  line-height: 34.8px;
  color: ${(props) => props.color};
`;

const StyledTitle = styled.div`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 16px;
  line-height: 47.6px;
`;

const StyledParagraph = styled.div`
  font-size: 22px;
`;

const StyledIcon = styled.img`
  position: absolute;
  right: 10%;
  top: 0px;
  z-index: 99;
`;

const StyledBehindCard = styled.div`
  border-radius: 8px;
  height: 100px;
  width: 80%;
  position: absolute;
  bottom: 16px;
  left: 10%;
  z-index: -1;
  box-shadow: 0px 8px 24px rgba(2, 23, 39, 0.2);
`;

export const AboutUsCard = (props: AboutUsCardType) => {
  return (
    <div>
      <StyledCardWrapper>
        <StyledIcon src={props.icon}></StyledIcon>

        <StyledCard>
          <StyledColouredTitle color={props.color}>
            {props.colouredTitle}
          </StyledColouredTitle>
          <StyledTitle>{props.title}</StyledTitle>
          <StyledParagraph>{props.paragraph}</StyledParagraph>
        </StyledCard>
        <StyledBehindCard />
      </StyledCardWrapper>
    </div>
  );
};
