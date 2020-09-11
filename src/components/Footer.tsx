import React, { useState } from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import WorldMap from '../assets/WorldMap.svg';
import Pin from '../assets/icons/Pin.svg';
import PinSelected from '../assets/icons/PinSelected.svg';
import './Footer.css';
import styled from 'styled-components';

const StyledPinWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
`;
const StyledSpan = styled.span`
  visibility: visible;
  position: absolute;
  left: 100%;
  top: 20%;
  color: red;
`;

const StyledPin = styled.div`
  width: 3vw;
  height: 3vw;
  position: relative;
  /* mask-image: url(${Pin}); */

  /* mask-position: center;
  mask-repeat: no-repeat; */
  mask-image: url(${Pin});
  mask-size: cover;
  /* -webkit-mask-image: url(${Pin});
  -webkit-mask-size: cover; */
  /* -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat; */
  /* background-image: url(${Pin}); */
  background-size: cover;
  background-color: black;

  :hover {
    mask-image: url(${PinSelected});
    -webkit-mask-image: url(${PinSelected});
    transition: all 0.5s ease;
  }
`;

export const Footer = () => {
  const [isShown, setIsShown] = useState(false);

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
            <img src={WorldMap} width={'100%'}></img>
            <StyledPinWrapper
              onMouseOver={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <StyledPin></StyledPin>
              {isShown && <StyledSpan>Vancouver</StyledSpan>}
            </StyledPinWrapper>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};
