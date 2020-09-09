import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Forbes from '../assets/Forbes.svg';
import PlugAndPlay from '../assets/PlugAndPlay.svg';
import ReportCard from '../assets/ReportCard.png';
import { CarouselArrow } from './CarouselArrow';

interface DivProps {
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  height?: string;
  width?: string;
  position?: string;
  transform?: string;
  top?: string;
  left?: string;
  opacity?: string;
}

const StyledDiv = styled.div`
  ${(props: DivProps) =>
    props &&
    `
      background-color: ${props.backgroundColor};
      padding: ${props.padding};
      margin: ${props.margin};
      height: ${props.height};
      width: ${props.width};
      position: ${props.position};
      transform: ${props.transform};
      top: ${props.top};
      left: ${props.left};
      opacity: ${props.opacity};
    `};
`;

const StyledCard = styled.div`
  width: 95%;

  ${(props: DivProps) =>
    `
        background-color: ${props.backgroundColor};
    `}
`;

const StyledWrapper = styled.div`
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

const buildReportCard = (card: any, opacity?: string) => (
  <StyledDiv opacity={opacity}>
    <StyledCard>
      <img src={card} width={'100%'} />
    </StyledCard>
  </StyledDiv>
);

const setOpacity = (cardList: any, current, next) => {
  return cardList.map((card, index) => {
    if (index == current) {
      return (
        <StyledDiv opacity={'0.8'}>
          <StyledCard>
            <img src={ReportCard} width={'100%'} />
          </StyledCard>
        </StyledDiv>
      );
    } else if (index == next) {
      return (
        <StyledDiv opacity={'1'}>
          <StyledCard>
            <img src={ReportCard} width={'100%'} />
          </StyledCard>
        </StyledDiv>
      );
    }
    return card;
  });
};

const reportCards = [
  buildReportCard(ReportCard),
  buildReportCard(ReportCard),
  buildReportCard(ReportCard),
  buildReportCard(ReportCard),
];

const setInitialOpacity = (cardList, windowSize, breakpoint) => {
  if (windowSize > breakpoint) {
    return cardList.map((card, index) => {
      if (index != 1) {
        return (
          <StyledDiv opacity={'0.8'}>
            <StyledCard>
              <img src={ReportCard} width={'100%'} />
            </StyledCard>
          </StyledDiv>
        );
      }
      return card;
    });
  }

  return cardList;
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
        setCardList(setOpacity(cardList, current + 1, next + 1));
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
      <div
        style={{
          padding: '0 50px',
          marginBottom: '10px',
        }}
      >
        <Slider {...settings}>{cardList}</Slider>
      </div>
      <StyledWrapper>
        <StyledText>What are they saying about us</StyledText>
      </StyledWrapper>
      <StyledWrapper>
        <StyledImageWrapper>
          <img src={PlugAndPlay}></img>
        </StyledImageWrapper>
        <StyledImageWrapper>
          <img src={Forbes}></img>
        </StyledImageWrapper>
      </StyledWrapper>
    </>
  );
};
