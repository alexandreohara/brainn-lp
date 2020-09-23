import React from 'react';

import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';

interface CardProps {
  color?: string;
  title: string;
  textFirst: string;
  image: string;
  description: string;
}

const StyledCard = styled.div`
  ${(props: CardProps) =>
    `
      border-radius: 16px;
      background: ${props.color}
    `}
`;

const StyledTextColumn = styled(Col)`
  padding: 4%;
  color: white;
`;

const StyledTitle = styled.div`
  color: white;
  font-weight: bold;
  font-size: 80px;
  line-height: 101px;

  @media (max-width: 767px) {
    font-size: 44px;
  }
`;

const StyledDescription = styled.div`
  color: white;
  font-weight: normal;
  font-size: 32px;
  line-height: 39px;
  padding-bottom: 6%;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const StyledImage = styled.img`
  height: fit-content;
`;

const StyledButton = styled.button`
  border: 2px solid white;
  background-color: transparent;
  color: white;
  padding: 2.5% 4%;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  &:focus {
    outline: 0;
  }

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const StyledLine = styled.div`
  position: absolute;
  width: 100px;
  height: 5px;
  background-color: white;
`;

export const HomeCard = (props: CardProps) => {
  if (props.textFirst) {
    return (
      <StyledCard {...props}>
        <Row>
          <StyledTextColumn sm={12} md={7}>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledDescription>
              {props.description[0]} <b>{props.description[1]}</b>
            </StyledDescription>
            <StyledLine />
            <StyledButton>Meet our process</StyledButton>
          </StyledTextColumn>
          <Col md={5} className={'hidden-sm hidden-xs'}>
            <StyledImage
              src={props.image}
              alt={'logo'}
              width={'100%'}
            ></StyledImage>
          </Col>
        </Row>
      </StyledCard>
    );
  }

  return (
    <StyledCard {...props}>
      <Row>
        <Col md={5} className={'hidden-xs hidden-sm'}>
          <StyledImage
            src={props.image}
            alt={'logo'}
            width={'100%'}
          ></StyledImage>
        </Col>
        <StyledTextColumn sm={12} md={7} {...props}>
          <StyledTitle>{props.title}</StyledTitle>
          <StyledDescription>
            {props.description[0]} <b>{props.description[1]}</b>
          </StyledDescription>
          <StyledLine />
          <StyledButton>Meet our process</StyledButton>
        </StyledTextColumn>
      </Row>
    </StyledCard>
  );
};
