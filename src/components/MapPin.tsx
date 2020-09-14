import React from 'react';
import Pin from 'assets/icons/Pin.svg';
import PinSelected from 'assets/icons/PinSelected.svg';
import styled from 'styled-components';
import { Colors } from 'consts/colors';

interface MapPinProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  textTop?: string;
  textBottom?: string;
  textLeft?: string;
  textRight?: string;
  color?: string;
  children: any;
}

interface PinProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  color?: string;
  backgroundColor?: string;
}

const StyledPinText = styled.span`
  visibility: hidden;
  font-size: 1vw;
  position: absolute;
  width: 10vw;

  ${(props: PinProps) =>
    props &&
    `
      color: ${props.color};
      top: ${
        props.top === undefined && props.bottom === undefined
          ? '30%'
          : props.top
      };
      bottom: ${props.bottom};
      left: ${
        props.left === undefined && props.right === undefined
          ? '105%'
          : props.left
      } ;
      right: ${props.right};
    `}
`;

const StyledPin = styled.div`
  width: 3vw;
  height: 3vw;
  mask-image: url(${Pin});
  mask-size: cover;
  background-size: cover;
  background-color: ${Colors.pink};

  ${(props: PinProps) =>
    props &&
    `
      background-color: ${props.backgroundColor}
    `}

  :hover {
    mask-image: url(${PinSelected});
    -webkit-mask-image: url(${PinSelected});
    transition: all 0.5s ease;
  }
`;

const StyledPinWrapper = styled.div`
  position: absolute;
  color: ${Colors.pink};
  z-index: 1;

  ${(props: PinProps) =>
    props &&
    `
      color: ${props.color};
      top: ${props.top};
      bottom: ${props.bottom};
      left: ${props.left};
      right: ${props.right};
    `}

  :hover ${StyledPinText} {
    visibility: visible;
  }
`;

export const MapPin = (props: MapPinProps) => {
  return (
    <StyledPinWrapper {...props}>
      <StyledPin backgroundColor={props.color} />
      <StyledPinText
        top={props.textTop}
        bottom={props.textBottom}
        left={props.textLeft}
        right={props.textRight}
      >
        {props.children}
      </StyledPinText>
    </StyledPinWrapper>
  );
};