import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import './Carousel.css';
import Forbes from '../assets/Forbes.svg';
import PlugAndPlay from '../assets/PlugAndPlay.svg';

// function SampleNextArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       onClick={onClick}
//       className={className}
//       style={{
//         // ...style,
//         // display: 'block',
//         // position: 'absolute',
//         // right: '-25px',
//         // top: '48%',
//         // backgroundColor: 'red',
//         // textAlign: 'center',
//         // width: '20px',
//         // height: '20px',

//         ...style,
//         display: 'block',
//         background: 'red',
//       }}
//     />
//   );
// }

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
}

const StyledDiv = styled.div`
  background-color: red;
  height: 300px;
  position: relative;

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
    `}
`;

const StyledCard = styled.div`
  background-color: gray;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 85%;
  transform: translate(-50%, -50%);

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

export const Carousel = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
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
          padding: '20px 50px',
        }}
      >
        <Slider {...settings}>
          <StyledDiv>
            <StyledCard className={'batata'}>
              <h1 style={{ textAlign: 'center' }}>potato</h1>
            </StyledCard>
          </StyledDiv>
          <StyledDiv backgroundColor={'blue'}>
            <StyledCard>
              <h1 style={{ textAlign: 'center' }}>potato</h1>
            </StyledCard>
          </StyledDiv>
          <StyledDiv backgroundColor={'green'}>
            <StyledCard>
              <h1 style={{ textAlign: 'center' }}>potato</h1>
            </StyledCard>
          </StyledDiv>
          <StyledDiv backgroundColor={'yellow'}>
            <StyledCard>
              <h1 style={{ textAlign: 'center' }}>potato</h1>
            </StyledCard>
          </StyledDiv>
        </Slider>
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
