import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import './Carousel.css';
import Forbes from '../assets/Forbes.svg';
import PlugAndPlay from '../assets/PlugAndPlay.svg';
import ReportCard from '../assets/ReportCard.png';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  console.log('batata');
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        // ...style,
        // display: 'block',
        // position: 'absolute',
        // right: '-25px',
        // top: '48%',
        // backgroundColor: 'red',
        // textAlign: 'center',
        // width: '20px',
        // height: '20px',

        ...style,
        display: 'block',
        // background: 'red',
      }}
    />
  );
}

const customPaging = (i: any) => {
  console.log(i);
  return (
    <div
      style={{
        width: '30px',
        color: 'blue',
        border: '1px blue solid',
      }}
    >
      {i + 1}
    </div>
  );
};

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
  opacity: 0.8;

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

const list = [
  buildReportCard(ReportCard),
  buildReportCard(ReportCard, '1'),
  buildReportCard(ReportCard),
  buildReportCard(ReportCard),
];

export const Carousel = () => {
  const [cardList, setCardList] = useState(list);

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
      } else {
        return card;
      }
    });
  };

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    // customPaging: customPaging,
    // nextArrow: <SampleNextArrow />,
    beforeChange: (current, next) => {
      setCardList(setOpacity(list, current + 1, next + 1));
    },
    responsive: [
      {
        breakpoint: 600,
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
