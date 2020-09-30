import { Colors } from 'consts/colors';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import DetailOriented from 'assets/icons/DetailOriented.svg';

const StyledAboutUsCard = styled.div`
  margin-top: 55px;
`;

const StyledCardWrapper = styled.div`
  position: relative;
  padding: 80px 10px 10px;
  margin: 0 15px;
`;

const StyledCard = styled.div`
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 8px 24px rgba(2, 23, 39, 0.2);
  position: relative;
`;

const StyledColouredTitle = styled.div`
  font-weight: 500;
  font-size: 28px;
  color: ${Colors.lightBlue};
`;

const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const StyledParagraph = styled.div`
  font-size: 22px;
`;

const StyledIcon = styled.img`
  position: absolute;
  right: 10%;
  top: 0px;
  z-index: 99;
`;

export const AboutUsCard = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
  };
  return (
    <StyledAboutUsCard>
      <Slider {...settings}>
        <div>
          <StyledCardWrapper>
            <StyledIcon src={DetailOriented}></StyledIcon>

            <StyledCard>
              <StyledColouredTitle>We are</StyledColouredTitle>
              <StyledTitle>Detail oriented.</StyledTitle>
              <StyledParagraph>
                When there are two options for accomplishing something, one
                satisfying and another exceptional, we will choose the latter,
                even if it means working harder than expected.
              </StyledParagraph>
            </StyledCard>
          </StyledCardWrapper>
        </div>
        <div>
          <StyledCardWrapper>
            <StyledIcon src={DetailOriented}></StyledIcon>

            <StyledCard>
              <StyledColouredTitle>We are</StyledColouredTitle>
              <StyledTitle>Detail oriented.</StyledTitle>
              <StyledParagraph>
                When there are two options for accomplishing something, one
                satisfying and another exceptional, we will choose the latter,
                even if it means working harder than expected.
              </StyledParagraph>
            </StyledCard>
          </StyledCardWrapper>
        </div>
      </Slider>
    </StyledAboutUsCard>
  );
};
