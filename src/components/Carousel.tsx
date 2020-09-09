import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Forbes from '../assets/Forbes.svg';
import PlugAndPlay from '../assets/PlugAndPlay.svg';
import ReportCard from '../assets/ReportCard.png';
import { CarouselArrow } from './CarouselArrow';

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
  color: white;
  opacity: 0.25;
`;

const StyledImageWrapper = styled.span`
  margin: 0 10px;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const buildReportCard = (image: any, opacity?: string) => (
  <StyledCardWrapper opacity={opacity}>
    <StyledCard>
      <StyledImage src={image} />
    </StyledCard>
  </StyledCardWrapper>
);

const setOpacity = (cardList: any, next) => {
  return cardList.map((card, index) => {
    if (index !== next) {
      return buildReportCard(card, '0.8');
    }
    return buildReportCard(card);
  });
};

const reportCards = [ReportCard, ReportCard, ReportCard, ReportCard];

const setInitialOpacity = (cardList, windowSize, breakpoint) => {
  if (windowSize > breakpoint) {
    return cardList.map((card, index) => {
      if (index !== 1) {
        return buildReportCard(card, '0.8');
      }
      return buildReportCard(card);
    });
  }

  return cardList.map((card) => buildReportCard(card));
};

export const Carousel = () => {
  const windowSize = window.innerWidth;
  const mediumBreakpoint = 600;
  const [cardList, setCardList] = useState(
    setInitialOpacity(reportCards, windowSize, mediumBreakpoint)
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
        breakpoint: 480,
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
