import React from 'react';

import styled from 'styled-components';

export const HorizontalScroll = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  white-space: normal;
`;

const MiniCard = styled.div`
  width: 304px;
  min-width: 304px;
  height: 346px;
  position: relative;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background: linear-gradient(225deg, #153a55 0%, #0f2a3d 100%);
`;

const StyledLine = styled.div`
  position: absolute;
  z-index: 1;
  width: 304px;
  height: 5px;
  background: ${(props: any) =>
    `linear-gradient(${props.deg}deg, ${props.startColor} 0%, ${props.endColor} 100%)`};
`;

const HideLine = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 2px;
  width: 204px;
  height: 3px;
  background: #153a55;
`;

const VerticalSeparatorStyled = styled.div`
  height: ${(props: any) =>
    props.size ? props.size : props.half ? 5 : props.double ? 20 : 10}px;
`;

export const VerticalSeparator = (props: any) => (
  <VerticalSeparatorStyled {...props} />
);

export const HorizontalSeparator = styled.div`
  width: 32px;
  min-width: 32px;
`;

const StyledTitle = styled.body`
  color: white;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
`;

const StyledBody = styled.a`
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.24em;
`;

const DecorationLine = styled.div`
  width: 50px;
  height: 3px;
  background: white;
`;

const StyledContent = styled.div`
  padding: 0 8px;
`;

export const SliderCard = (props: any) => {
  return (
    <MiniCard>
      <StyledLine {...props.decorationLine} />
      <HideLine />
      <StyledContent>
        <VerticalSeparator double />
        <VerticalSeparator double />
        <VerticalSeparator double />
        <StyledTitle>{props.title}</StyledTitle>
        <VerticalSeparator double />
        <VerticalSeparator />
        <DecorationLine />
        <VerticalSeparator double />
        <VerticalSeparator />
        <StyledBody>SEE MORE</StyledBody>
      </StyledContent>
    </MiniCard>
  );
};
