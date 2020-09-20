import { Colors } from 'consts/colors';
import React from 'react';
import styled from 'styled-components';
import BenchmarkIcon from 'assets/icons/BenchmarkIcon.svg';

interface ServiceAspectProps {
  icon: string;
  color: string;
  title: string;
  description: string;
}

const StyledServiceAspect = styled.div`
  padding: 8px;
  max-width: 21vw;
`;

const StyledTitleWithLeftBorder = styled.div.attrs((props: any) => ({
  borderColor: props.borderColor,
}))`
  padding-left: 5px;
  margin: 6px 6px;
  font-weight: bold;
  font-size: 24px;
  color: ${Colors.white};
  border-left: 3px solid ${(props) => props.borderColor};
`;

const StyledDescription = styled.div`
  color: ${Colors.white};
  padding-left: 15px;
  font-size: 20px;
  opacity: 0.8;
`;

export const ServiceAspect = (props: ServiceAspectProps) => {
  return (
    <StyledServiceAspect>
      <img src={BenchmarkIcon} alt={'benchmark-icon'} />
      <StyledTitleWithLeftBorder borderColor={props.color}>
        {props.title}
      </StyledTitleWithLeftBorder>
      <StyledDescription>{props.description}</StyledDescription>
    </StyledServiceAspect>
  );
};
