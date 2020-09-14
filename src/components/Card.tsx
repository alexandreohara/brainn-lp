import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid';

interface CardProps {
  deg: number;
  startColor: string;
  endColor: string;
}

const StyledCard = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 700px;
  width: 100%;
  ${(props: CardProps) =>
    `border-radius: 16px;
    background: linear-gradient(${props.deg}deg, ${props.startColor} 0%, ${props.endColor} 100%);`};
`;

const StyledTextColumn = styled(Col)`
  padding-top: 4%;
  padding-bottom: 4%;
  padding-right: 4%;
  padding-left: 4%;
  color: white;
`;

const StyledTitle = styled.body`
  color: white;
  font-weight: bold;
  font-size: 5rem;
  line-height: 101px;
`;

const StyledDescription = styled.body`
  color: white;
  font-weight: normal;
  font-size: 2em;
  line-height: 39px;
  padding-bottom: 6%;
  width: 653px;
`;

const StyledImage = styled.img`
  width: 512px;
`;

const StyledButton = styled.button`
  border: 2px solid white;

  background-color: transparent;
  color: white;
  padding: 2.5% 4%;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

const StyledLine = styled.div`
  position: absolute;
  width: 100px;
  height: 5px;
  background-color: white;
`;

const HomeCard = (props: any) => {
  if (props.textFirst) {
    return (
      <StyledCard {...props}>
        <StyledTextColumn md={8}>
          <StyledTitle>{props.title}</StyledTitle>
          <StyledDescription>
            {props.description[0]} <b>{props.description[1]}</b>
          </StyledDescription>
          <StyledLine />
          <StyledButton>Meet our process</StyledButton>
        </StyledTextColumn>
        <Col xs={false} md={4}>
          <StyledImage src={props.image} alt="logo"></StyledImage>
        </Col>
      </StyledCard>
    );
  }

  return (
    <StyledCard {...props}>
      <Col xs={false} md={6}>
        <StyledImage src={props.image} alt="logo"></StyledImage>
      </Col>
      <StyledTextColumn {...props}>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledDescription>
          {props.description[0]} <b>{props.description[1]}</b>
        </StyledDescription>
        <StyledLine />
        <StyledButton>Meet our process</StyledButton>
      </StyledTextColumn>
    </StyledCard>
  );
};

export default HomeCard;