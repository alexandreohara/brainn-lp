import React from 'react';

import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';
import { useHistory } from 'react-router-dom';

interface CardProps {
  title: string;
  textFirst: boolean;
  image: string;
  description: string[];
  color?: string;
  url?: string;
}

const StyledCard = styled.div.attrs((props: any) => ({
  color: props.color,
}))`
  border-radius: 16px;
  background: ${(props) => props.color};
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

  @media (max-width: 1205px) {
    font-size: 65px;
  }

  @media (max-width: 991px) {
    font-size: 44px;
  }
`;

const StyledDescription = styled.div`
  color: white;
  font-weight: normal;
  font-size: 32px;
  line-height: 39px;
  padding-bottom: 6%;

  @media (max-width: 991px) {
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

  @media (max-width: 991px) {
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
  const history = useHistory();

  const handleClick = () => history.push(props.url ?? '');

  if (props.textFirst) {
    return (
      <StyledCard color={props.color}>
        <Row>
          <StyledTextColumn md={12} lg={7}>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledDescription>
              {props.description[0]} <b>{props.description[1]}</b>
            </StyledDescription>
            <StyledLine />
            <StyledButton onClick={handleClick}>Meet our process</StyledButton>
          </StyledTextColumn>
          <Col lg={5} className={'hidden-sm hidden-xs hidden-md'}>
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
    <StyledCard color={props.color}>
      <Row>
        <Col lg={5} className={'hidden-xs hidden-sm hidden-md'}>
          <StyledImage
            src={props.image}
            alt={'logo'}
            width={'100%'}
          ></StyledImage>
        </Col>
        <StyledTextColumn md={12} lg={7}>
          <StyledTitle>{props.title}</StyledTitle>
          <StyledDescription>
            {props.description[0]} <b>{props.description[1]}</b>
          </StyledDescription>
          <StyledLine />
          <StyledButton onClick={handleClick}>Meet our process</StyledButton>
        </StyledTextColumn>
      </Row>
    </StyledCard>
  );
};
