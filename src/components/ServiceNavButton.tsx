import React from 'react';

import styled from 'styled-components';
import { Colors } from 'consts/colors';
import { Col, Row } from 'react-flexbox-grid';
import RightArrow from 'assets/icons/RightArrow.svg';
import LeftArrow from 'assets/icons/LeftArrow.svg';
import { useHistory } from 'react-router-dom';

interface ServiceNavButtonProps {
  color: string;
  title: string;
  nextServiceUrl?: string;
  previousServiceUrl?: string;
  next?: boolean;
}

const StyledServiceNavButton = styled.div.attrs((props: any) => ({
  color: props.color,
}))`
  width: 100%;
  background: ${(props) => props.color};
  cursor: pointer;
`;

const StyledNextContent = styled.div`
  text-align: right;
  padding: 10px 0;
`;

const StyledPreviousContent = styled.div`
  text-align: left;
  padding: 10px 0;
`;

const StyledTitle = styled.div`
  color: ${Colors.white};
  font-size: 32px;
  font-weight: bold;

  @media (max-width: 991px) {
    font-size: 20px;
  }
`;

const StyledText = styled.div`
  color: ${Colors.white};
  letter-spacing: 0.24em;
`;

const StyledNextPrevImg = styled.img`
  margin-top: 17px;
  width: 52px;

  @media (max-width: 991px) {
    margin-top: 10px;
  }
`;

const StyledPrevImgWrapper = styled.div`
  text-align: right;
`;

export const ServiceNavButton = (props: ServiceNavButtonProps) => {
  const history = useHistory();

  const handleNextClick = () => {
    history.push(props.nextServiceUrl ?? '');
  };

  const handlePreviousClick = () => {
    history.push(props.previousServiceUrl ?? '');
  };

  return (
    <StyledServiceNavButton color={props.color}>
      {props.next ? (
        <Row onClick={handleNextClick}>
          <Col xs={9}>
            <StyledNextContent>
              <StyledTitle>{props.title}</StyledTitle>
              <StyledText>Next</StyledText>
            </StyledNextContent>
          </Col>
          <Col xs={3}>
            <StyledNextPrevImg src={RightArrow} alt={'right-arrow'} />
          </Col>
        </Row>
      ) : (
        <Row onClick={handlePreviousClick}>
          <Col xs={3}>
            <StyledPrevImgWrapper>
              <StyledNextPrevImg src={LeftArrow} alt={'left-arrow'} />
            </StyledPrevImgWrapper>
          </Col>
          <Col xs={9}>
            <StyledPreviousContent>
              <StyledTitle>{props.title}</StyledTitle>
              <StyledText>Previous</StyledText>
            </StyledPreviousContent>
          </Col>
        </Row>
      )}
    </StyledServiceNavButton>
  );
};
