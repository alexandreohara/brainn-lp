import React from 'react';

import { Colors, Gradients } from 'consts/colors';
import { Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import RightArrow from 'assets/icons/RightArrow.svg';
import { useHistory } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  strongLastPhrase?: string;
  color: string;
  url: string;
}

const StyledServiceCard = styled.div`
  border-radius: 8px;
  background: ${Gradients.gray};
  max-width: 646px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
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
  const history = useHistory();

  return (
    <StyledServiceCard onClick={() => history.push(props.url)}>
      <Row>
        <Col xs={10}>
          <StyledContentWrapper>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledDescription>
              {props.description + ' '}
              <b>{props.strongLastPhrase ?? ''}</b>
            </StyledDescription>
          </StyledContentWrapper>
        </Col>
        <Col xs={2}>
          <StyledImgWrapper color={props.color}>
            <img src={RightArrow} alt={'right-arrow'} />
          </StyledImgWrapper>
        </Col>
      </Row>
    </StyledServiceCard>
  );
};
