import React from 'react';
import styled from 'styled-components';
import { Colors } from 'consts/colors';
import { Col, Row } from 'react-styled-flexboxgrid';
import RightArrow from 'assets/icons/RightArrow.svg';

interface ServiceNavButtonProps {
  color: string;
  title: string;
  next?: boolean;
}

const StyledServiceNavButton = styled.div.attrs((props: any) => ({
  color: props.color,
}))`
  width: 100%;
  background: ${(props) => props.color};
`;

const StyledContent = styled.div`
  text-align: right;
  padding-top: 10px;
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

const StyledImg = styled.img`
  margin-top: 15px;
`;

export const ServiceNavButton = (props: ServiceNavButtonProps) => {
  return (
    <StyledServiceNavButton color={props.color}>
      <Row center={'xs'}>
        <Col xs={9}>
          <StyledContent>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledText>Next</StyledText>
          </StyledContent>
        </Col>
        <Col xs={3}>
          <StyledImg src={RightArrow} />
        </Col>
      </Row>
    </StyledServiceNavButton>
  );
};
