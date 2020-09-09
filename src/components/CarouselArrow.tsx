import React from 'react';
import RightArrow from '../assets/icons/RightArrow.svg';
import LeftArrow from '../assets/icons/LeftArrow.svg';
import styled from 'styled-components';

const StyledNextArrowDiv = styled.div`
  position: absolute;
  right: -15px;
  top: 36%;
`;

const StyledPrevArrowDiv = styled.div`
  position: absolute;
  left: -26px;
  top: 36%;
  z-index: 1;
`;

const StyledImage = styled.img`
  width: 50px;
`;

export const CarouselArrow = (props: any) => {
  const { onClick, next } = props;

  if (next) {
    return (
      <StyledNextArrowDiv onClick={onClick}>
        <StyledImage src={RightArrow} />
      </StyledNextArrowDiv>
    );
  }

  return (
    <StyledPrevArrowDiv onClick={onClick}>
      <StyledImage src={LeftArrow} />
    </StyledPrevArrowDiv>
  );
};
