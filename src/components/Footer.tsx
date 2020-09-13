import React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import WorldMap from '../assets/WorldMap.svg';
import Pin from '../assets/icons/Pin.svg';
import PinSelected from '../assets/icons/PinSelected.svg';
import './Footer.css';
import styled from 'styled-components';

interface PinProps {
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  color?: string;
  backgroundColor?: string;
}

interface TextProps {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  margin?: string;
}

const StyledPinText = styled.span`
  opacity: 0;
  position: absolute;
  left: 110%;
  top: 25%;
  color: #fc2d5a;
  transition: all 0.5s ease;

  ${(props: PinProps) =>
    props &&
    `
      color: ${props.color};
      top: ${props.top};
      bottom: ${props.bottom};
      left: ${props.left};
      right: ${props.right};
    `}
`;

const StyledPin = styled.div`
  width: 3vw;
  height: 3vw;
  position: relative;
  mask-image: url(${Pin});
  mask-size: cover;
  background-size: cover;
  background-color: #fc2d5a;

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

  ${(props: PinProps) =>
    props &&
    `
      position: ${props.position};
      top: ${props.top};
      bottom: ${props.bottom};
      left: ${props.left};
      right: ${props.right};
    `}

  :hover ${StyledPinText} {
    opacity: 1;
  }
`;

const StyledMap = styled.img`
  opacity: 0.5;
  width: 100%;
`;

const StyledMapWrapper = styled.div`
  position: relative;
`;

const StyledDivider = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 1px;
  opacity: 0.15;
  margin: 10px 0;
`;

const StyledTextWithLeftBorder = styled.div`
  border-left: 1px solid #007cf9;
  padding-left: 5px;
  margin: 5px 0;
  font-weight: bold;
  font-size: 1.3vw;
`;

const StyledSubtitle = styled.div`
  margin: 5px 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1vw;
`;

const StyledTextWrapper = styled.div`
  margin: 25px 0;
  color: white;

  ${(props: TextProps) =>
    props &&
    `
      font-size: ${props.fontSize};
      color: ${props.color};
      font-weight: ${props.fontWeight};
      margin: ${props.margin};
    `}
`;

export const Footer = () => {
  return (
    <Grid fluid={true}>
      <Row>
        <Col xs={12} sm={6}>
          <StyledTextWrapper
            color={'#546E82'}
            fontSize={'6vw'}
            fontWeight={'bold'}
          >
            We do digital.
          </StyledTextWrapper>
          <StyledTextWrapper fontSize={'6vw'} fontWeight={'bold'}>
            You grow faster.
          </StyledTextWrapper>

          <StyledDivider />

          <StyledTextWrapper>
            <StyledTextWithLeftBorder>Become a Client</StyledTextWithLeftBorder>
            <StyledSubtitle>hello@brainn.co</StyledSubtitle>
          </StyledTextWrapper>

          <StyledDivider />

          <StyledTextWrapper>
            <StyledTextWithLeftBorder>Open Source</StyledTextWithLeftBorder>
            <StyledSubtitle>Github</StyledSubtitle>
          </StyledTextWrapper>

          <StyledDivider />

          <StyledTextWrapper>
            <StyledTextWithLeftBorder>Headquarter</StyledTextWithLeftBorder>
            <StyledSubtitle>
              30 Fradique Coutinho St. São Paulo - Brazil
            </StyledSubtitle>
          </StyledTextWrapper>
        </Col>
        <Col xs={false} sm={6}>
          <StyledMapWrapper>
            <StyledMap src={WorldMap} />
            <StyledPinWrapper top={'50%'}>
              <StyledPin />
              <StyledPinText>Vancouver</StyledPinText>
            </StyledPinWrapper>

            <StyledPinWrapper top={'0'}>
              <StyledPin />
              <StyledPinText>Batata</StyledPinText>
            </StyledPinWrapper>
          </StyledMapWrapper>
        </Col>
      </Row>
    </Grid>
  );
};
