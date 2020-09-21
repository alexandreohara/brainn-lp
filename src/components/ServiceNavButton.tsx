import React from 'react';
import styled from 'styled-components';
import { Colors } from 'consts/colors';
import { Col, Row } from 'react-flexbox-grid';
import RightArrow from 'assets/icons/RightArrow.svg';
import LeftArrow from 'assets/icons/LeftArrow.svg';

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
`;

const StyledText = styled.div`
  color: ${Colors.white};
  letter-spacing: 0.24em;
`;

const StyledNextImg = styled.img`
  margin-top: 17px;
  width: 52px;
`;

const StyledPreviousImg = styled.img`
  margin-top: 17px;
  width: 52px;
`;

const StyledPrevImgWrapper = styled.div`
  text-align: right;
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

export const ServiceNavButton = (props: ServiceNavButtonProps) => {
  return (
    <StyledServiceNavButton color={props.color}>
      {props.next ? (
        <StyledLink href={props.nextServiceUrl}>
          <Row>
            <Col xs={9}>
              <StyledNextContent>
                <StyledTitle>{props.title}</StyledTitle>
                <StyledText>Next</StyledText>
              </StyledNextContent>
            </Col>
            <Col xs={3}>
              <StyledNextImg src={RightArrow} />
            </Col>
          </Row>
        </StyledLink>
      ) : (
        <StyledLink href={props.previousServiceUrl}>
          <Row>
            <Col xs={3}>
              <StyledPrevImgWrapper>
                <StyledPreviousImg src={LeftArrow} />
              </StyledPrevImgWrapper>
            </Col>
            <Col xs={9}>
              <StyledPreviousContent>
                <StyledTitle>{props.title}</StyledTitle>
                <StyledText>Previous</StyledText>
              </StyledPreviousContent>
            </Col>
          </Row>
        </StyledLink>
      )}
    </StyledServiceNavButton>
  );
};
