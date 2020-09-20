import { Colors, Gradients } from 'consts/colors';
import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import Storming from 'assets/images/Storming.svg';

const StyledHeader = styled.div`
  background: ${Gradients.lightBlue};
`;

const StyledServices = styled.div`
  color: ${Colors.white};
  font-size: 28px;
`;

const StyledStorming = styled.div`
  color: ${Colors.white};
  font-size: 80px;
  font-weight: bold;
  position: relative;
`;

const StyledStormingShadow = styled.div`
  color: transparent;
  opacity: 0.2;
  font-size: 80px;
  font-weight: bold;
  -webkit-text-stroke: 2px ${Colors.white};
  position: absolute;
  top: 8px;
  left: 8px;
`;

const StyledHeaderText = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
`;

const StormingPage = () => {
  return (
    <>
      <StyledHeader>
        <Row bottom={'xs'}>
          <Col xs={6}>
            <StyledHeaderText>
              <StyledServices>SERVICES</StyledServices>
              <StyledStorming>
                Storming
                <StyledStormingShadow>Storming</StyledStormingShadow>
              </StyledStorming>
            </StyledHeaderText>
          </Col>
          <Col xs={6}>
            <img src={Storming} width={'100%'} />
          </Col>
        </Row>
      </StyledHeader>
    </>
  );
};

export default StormingPage;
