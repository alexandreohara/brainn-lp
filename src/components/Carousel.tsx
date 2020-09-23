import React, { useState } from 'react';

import { Colors } from 'consts/colors';
import Slider from 'react-slick';
import styled from 'styled-components';
import Forbes from '../assets/images/Forbes.svg';
import PlugAndPlay from '../assets/images/PlugAndPlay.svg';
import ReportCard from '../assets/images/ReportCard.png';
import { CarouselArrow } from 'components';

interface DivProps {
  opacity?: string;
}

const StyledCarouselDiv = styled.div`
  padding: 0 50px;
  margin-bottom: 10px;
`;

const StyledCardWrapper = styled.div`
  ${(props: DivProps) =>
    props &&
    `
      opacity: ${props.opacity};
    `};
`;

const StyledCard = styled.div`
  width: 95%;
`;

const StyledCaptionWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledText = styled.div`
  font-size: 16px;
  color: ${Colors.white};
  opacity: 0.25;
`;

const StyledImageWrapper = styled.span`
  margin: 0 10px;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const buildReportCard = (image: any, key, opacity?: string) => (
  <StyledCardWrapper opacity={opacity} key={key}>
    <StyledCard>
      <StyledImage src={image} />
    </StyledCard>
  </StyledCardWrapper>
);

const setOpacity = (cardList: any, next) => {
  return cardList.map((card, index) => {
    if (index !== next) {
      return buildReportCard(card, index, '0.8');
    }
    return buildReportCard(card, index);
  });
};

const reportCards = [ReportCard, ReportCard, ReportCard, ReportCard];

const buildCardList = (cardList, windowSize, breakpoint) => {
  if (windowSize > breakpoint) {
    return cardList.map((card, index) => {
      if (index !== 1) {
        return buildReportCard(card, index, '0.8');
      }
      return buildReportCard(card, index);
    });
  }

  return cardList.map((card, index) => buildReportCard(card, index));
};

export const Carousel = () => {
  const windowSize = window.innerWidth;
  const mediumBreakpoint = 600;
  const smallBreakpoint = 480;
  const [cardList, setCardList] = useState(
    buildCardList(reportCards, windowSize, mediumBreakpoint)
  );

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: <CarouselArrow next={false} />,
    nextArrow: <CarouselArrow next={true} />,
    beforeChange: (current, next) => {
      if (windowSize > mediumBreakpoint) {
        setCardList(setOpacity(reportCards, next + 1));
      }
    },
    responsive: [
      {
        breakpoint: mediumBreakpoint,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: smallBreakpoint,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <StyledCarouselDiv>
        <Slider {...settings}>{cardList}</Slider>
      </StyledCarouselDiv>
      <StyledCaptionWrapper>
        <StyledText>What are they saying about us</StyledText>
      </StyledCaptionWrapper>
      <StyledCaptionWrapper>
        <StyledImageWrapper>
          <img src={PlugAndPlay} alt={'plugAndPlay'}></img>
        </StyledImageWrapper>
        <StyledImageWrapper>
          <img src={Forbes} alt={'forbes'}></img>
        </StyledImageWrapper>
      </StyledCaptionWrapper>
    </>
  );
};
