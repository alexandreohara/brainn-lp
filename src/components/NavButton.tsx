import React from 'react';

import styled from 'styled-components';

interface NavButtonProps {
  textColor?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  border?: string;
  cursor?: string;
  lineHeight?: string;
  onClick?: () => void;
  children: any;
}

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 8px 38px;
  cursor: pointer;

  ${(props: NavButtonProps) =>
    props &&
    `
      color: ${props.textColor};
      border: ${props.border};
      textColor: ${props.textColor};
      background-color: ${props.backgroundColor};
      font-weight: ${props.fontWeight};
      font-size: ${props.fontSize}px;
      padding: ${props.padding};
      cursor: ${props.cursor};
      line-height: ${props.lineHeight};
    `}
`;

export const NavButton = (props: NavButtonProps) => {
  return <StyledButton {...props} />;
};
