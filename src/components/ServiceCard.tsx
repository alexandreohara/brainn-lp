import { Colors, Gradients } from 'consts/colors';
import React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import RightArrow from 'assets/icons/RightArrow.svg';

interface ServiceCardProps {
  title: string;
  description: string;
  strongLastPhrase?: string;
  color: string;
}

const StyledServiceCard = styled.div`
  border-radius: 8px;
  background-color: ${Gradients.gray};
  max-width: 500px;
`;

const StyledContentWrapper = styled.div`
  padding: 32px;
`;

const StyledTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${Colors.white};
`;

const StyledDescription = styled.div`
  font-size: 16px;
  color: ${Colors.white};
`;

const StyledImgWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 0 8px 8px 0;

  ${(props: any) =>
    props &&
    `
      background: ${props.color};
    `}
`;

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <StyledServiceCard>
      <Row>
        <Col xs={10}>
          <StyledContentWrapper>
            <Col>
              <Row>
                <StyledTitle>{props.title}</StyledTitle>
              </Row>
              <Row>
                <StyledDescription>
                  {props.description + ' '}
                  <b>{props.strongLastPhrase ?? ''}</b>
                </StyledDescription>
              </Row>
            </Col>
          </StyledContentWrapper>
        </Col>
        <Col xs={2}>
          <StyledImgWrapper color={props.color}>
            <img src={RightArrow} />
          </StyledImgWrapper>
        </Col>
      </Row>
    </StyledServiceCard>
  );
};
