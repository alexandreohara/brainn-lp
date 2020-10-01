import React from 'react';

import 'components/AboutUsSlider.css';

import Slider from 'react-slick';
import styled from 'styled-components';
import { AboutUsCard, AboutUsCardType } from './AboutUsCard';

interface AboutUsSliderProps {
  cardList: AboutUsCardType[];
}

const StyledSliderWrapper = styled.div`
  margin-top: 55px;
`;

export const AboutUsSlider = (props: AboutUsSliderProps) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
  };

  return (
    <StyledSliderWrapper>
      <Slider {...settings}>
        {props.cardList.map((card, index) => (
          <React.Fragment key={index}>
            <AboutUsCard
              colouredTitle={card.colouredTitle}
              title={card.title}
              paragraph={card.paragraph}
              color={card.color}
              icon={card.icon}
            />
          </React.Fragment>
        ))}
      </Slider>
    </StyledSliderWrapper>
  );
};
