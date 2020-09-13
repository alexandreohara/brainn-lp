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

export const Footer = () => {
  return (
    <Grid fluid={true}>
      <Row>
        <Col xs={12} sm={6}>
          <div style={{ backgroundColor: 'yellow' }}>
            <h1>We do digital.</h1>
            <h1>You grow faster.</h1>
          </div>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              height: '1px',
              opacity: '0.15',
              margin: '10px 0',
            }}
          />
          <div>
            <div
              style={{
                borderLeft: '1px solid #007CF9',
                paddingLeft: '5px',
              }}
            >
              <h3>Become a Client</h3>
            </div>
            <p style={{ marginLeft: '8px' }}>hello@brainn.co</p>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              height: '1px',
              opacity: '0.15',
              margin: '10px 0',
            }}
          />
          <div>
            <div
              style={{
                borderLeft: '1px solid #007CF9',
                paddingLeft: '5px',
              }}
            >
              <h3>Open Source</h3>
            </div>
            <p style={{ margin: '10px 8px' }}>Github</p>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              height: '1px',
              opacity: '0.15',
              margin: '10px 0',
            }}
          />
          <div>
            <div
              style={{
                borderLeft: '1px solid #007CF9',
                paddingLeft: '5px',
              }}
            >
              <h3>Headquarter</h3>
            </div>
            <p style={{ margin: '10px 8px' }}>
              30 Fradique Coutinho St. São Paulo - Brazil
            </p>
          </div>
        </Col>
        <Col xs={false} sm={6}>
          <div
            className={'worldMap'}
            style={{
              overflow: 'auto',
              position: 'relative',
              top: '-75px',
            }}
          >
            <img src={WorldMap} width={'100%'} style={{ opacity: '0.5' }} />
            <StyledPinWrapper top={'50%'}>
              <StyledPin />
              <StyledPinText>Vancouver</StyledPinText>
            </StyledPinWrapper>

            <StyledPinWrapper top={'0'}>
              <StyledPin />
              <StyledPinText>Batata</StyledPinText>
            </StyledPinWrapper>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};
