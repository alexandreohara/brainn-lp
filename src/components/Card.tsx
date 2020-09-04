import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid';
import Storming from './Storming.svg';

interface CardProps {
  deg: number;
  startColor: string;
  endColor: string;
}

const StyledCard = styled.div`
  display: flex;
  width: 100%;
  ${(props: CardProps) =>
    `border-radius: 16px;
    background: linear-gradient(${props.deg}deg, ${props.startColor} 0%, ${props.endColor} 100%);`};
`;

const StyledTextColumn = styled(Col)`
  padding-left: 4%;
  padding-top: 4%;
  padding-bottom: 4%;
  color: white;
  width: 653px;
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
`;

const StyledImage = styled.img`
  width: 512px;
`;

const Card = (props: any) => (
  <StyledCard className="styled-card" {...props}>
    <StyledTextColumn className="text-column">
      <StyledTitle>{props.title}</StyledTitle>
      <StyledDescription>
        {props.description[0]} <b>{props.description[1]}</b>
      </StyledDescription>
    </StyledTextColumn>
    <Col xs={false} md={6}>
      <StyledImage src={Storming} alt="logo"></StyledImage>
    </Col>
  </StyledCard>
);

export default Card;
