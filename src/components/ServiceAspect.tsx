import React from 'react';

import { Colors } from 'consts/colors';
import styled from 'styled-components';
interface ServiceAspectProps {
  icon: string;
  color: string;
  title: string;
  description: string;
}

const StyledServiceAspect = styled.div`
  padding: 8px;
`;

const StyledTitleWithLeftBorder = styled.div.attrs((props: any) => ({
  borderColor: props.borderColor,
}))`
  padding-left: 5px;
  margin: 16px 6px;
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
      <img src={props.icon} alt={'service-icon'} />
      <StyledTitleWithLeftBorder borderColor={props.color}>
        {props.title}
      </StyledTitleWithLeftBorder>
      <StyledDescription>{props.description}</StyledDescription>
    </StyledServiceAspect>
  );
};
