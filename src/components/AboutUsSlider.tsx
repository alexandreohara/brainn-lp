import { Colors } from 'consts/colors';
import React from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';
import { AboutUsCard } from './AboutUsCard';
import DetailOriented from 'assets/icons/DetailOriented.svg';

const StyledAboutUsCard = styled.div`
  margin-top: 55px;
`;

export const AboutUsSlider = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
  };

  return (
    <StyledAboutUsCard>
      <Slider {...settings}>
        <AboutUsCard
          colouredTitle={'We are'}
          title={'Detail oriented.'}
          paragraph={
            'When there are two options for accomplishing something, one satisfying and another exceptional, we will choose the latter, even if it means working harder than expected.'
          }
          color={Colors.lightBlue}
          icon={DetailOriented}
        ></AboutUsCard>
      </Slider>
    </StyledAboutUsCard>
  );
};
