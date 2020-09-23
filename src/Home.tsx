import React from 'react';
import './components/Navbar.css';
import './Home.css';
import { Col, Row } from 'react-flexbox-grid';
import HomeCard from './components/Card';
import Storming from './assets/images/Storming.svg';
import Delivery from './assets/images/Delivery.svg';
import Augmentation from './assets/images/Augmentation.svg';
import TypeLogo from './assets/images/TypeLogo.png';
import Suflex from './assets/images/Suflex.png';
import Kovi from './assets/images/Kovi.png';
import Cvc from './assets/images/Cvc.png';
import Bxblue from './assets/images/Bxblue.png';
import Bv from './assets/images/Bv.png';
import Gupy from './assets/images/Gupy.png';
import FindHotel from './assets/images/FindHotel.png';
import Poliedro from './assets/images/Poliedro.png';
import Pipefy from './assets/images/Pipefy.png';
import Neo from './assets/images/Neo.png';
import {
  HorizontalScroll,
  SliderCard,
  VerticalSeparator,
  HorizontalSeparator,
} from './components';
import { Footer } from './components/Footer';
import styled from 'styled-components';
import { Colors } from 'consts/colors';

const StyledHome = styled.div`
  background-color: ${Colors.black};
`;

const StyledHeaderTitle = styled.div`
  padding-left: 64px;
  padding-top: 40px;
  font-size: 88px;
  font-weight: bold;
  color: ${Colors.white};

  @media (max-width: 767px) {
    font-size: 44px;
  }
`;

const StyledCaption = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.white};
  opacity: 0.24;

  @media (max-width: 767px) {
    font-size: 44px;
  }
`;

const StyledImage = styled.div`
  text-align: right;
`;

const StyledLogos = styled.div`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 1200px;
`;

const StyledPadding = styled.div`
  padding: 64px;
`;

export const Home = () => {
  return (
    <StyledHome>
      <Row middle={'xs'}>
        <Col xs={4} sm={6}>
          <StyledHeaderTitle>
            Lean digital innovation that works.
          </StyledHeaderTitle>
        </Col>
        <Col xs={8} sm={6}>
          <StyledImage>
            <img src={TypeLogo} alt={''} width={'100%'} />
          </StyledImage>
        </Col>
      </Row>
      <HorizontalScroll>
        <StyledLogos>
          <div className={'column'}>
            <img src={Kovi} alt={'Kovi'}></img>
          </div>
          <div className={'column'}>
            <img src={Poliedro} alt={'Poliedro'}></img>
          </div>
          <div className={'column'}>
            <img src={FindHotel} alt={'Find Hotel'}></img>
          </div>
          <div className={'column'}>
            <img src={Neo} alt={'Neo'}></img>
          </div>
          <div className={'column'}>
            <img src={Suflex} alt={'Suflex'}></img>
          </div>
          <div className={'column'}>
            <img src={Cvc} alt={'CVC'}></img>
          </div>
          <div className={'column'}>
            <img src={Pipefy} alt={'Pipefy'}></img>
          </div>
          <div className={'column'}>
            <img src={Bxblue} alt={'BxBlue'}></img>
          </div>
          <div className={'column'}>
            <img src={Bv} alt={'BV'}></img>
          </div>
          <div className={'column'}>
            <img src={Gupy} alt={'Gupy'}></img>
          </div>
        </StyledLogos>
      </HorizontalScroll>
      <StyledCaption>Trusted by global innovators</StyledCaption>
      <StyledHeaderTitle>How we can help</StyledHeaderTitle>
      <StyledPadding>
        <HorizontalScroll>
          {SLIDER_CARDS.map((card, index) => (
            <>
              <SliderCard
                decorationLine={card.decorationLine}
                title={card.title}
              />
              {index !== SLIDER_CARDS.length && <HorizontalSeparator />}
            </>
          ))}
        </HorizontalScroll>
        <VerticalSeparator size={64} />
        <Col>
          {cardSections.map((props: any) => {
            return (
              <>
                <HomeCard key={props.id} {...props} />;
                <VerticalSeparator size={64} />
              </>
            );
          })}
        </Col>
      </StyledPadding>
      <Footer />
    </StyledHome>
  );
};

const cardSections = [
  {
    key: 0,
    deg: 260.39,
    startColor: '#00BEFB',
    endColor: '#007CF9',
    title: 'Storming',
    textFirst: true,
    image: Storming,
    description: [
      `We help innovators quickly understand how we will build their digital
    products and provide a competitive business advantage.`,
      `The idea that works.`,
    ],
  },

  {
    key: 1,
    deg: 260.39,
    startColor: '#FFD15C',
    endColor: '#FF912C',
    title: 'Delivery',
    textFirst: false,
    image: Delivery,
    description: [
      `We build high-quality digital products that scale. We do that through new technologies,
       great talents, and true agile methods.`,
      `The product that works.`,
    ],
  },

  {
    key: 2,
    deg: 260.39,
    startColor: '#19EE94',
    endColor: '#04B375',
    title: 'Augmentation',
    textFirst: false,
    image: Augmentation,
    description: [
      `We provide staff augmentation to high-growth tech companies using new programming languages to move faster.`,
      `The team that works.`,
    ],
  },
];

const SLIDER_CARDS = [
  {
    title: 'Launch innovative digital products',
    decorationLine: {
      deg: 260.39,
      startColor: '#FFD15C',
      endColor: '#FF912C',
    },
  },
  {
    title: 'Meet deadlines within your digital products',
    decorationLine: {
      deg: 261.18,
      startColor: '#00BEFB',
      endColor: '#007CF9',
    },
  },
  {
    title: 'Increase quality to regain trust from your users',
    decorationLine: {
      deg: 263.71,
      startColor: '#FF6B8B',
      endColor: '#FC2D5A',
    },
  },
  {
    title: 'Improve your architecture and scale faster',
    decorationLine: {
      deg: 260.39,
      startColor: '#8C79FF',
      endColor: '#6850F9',
    },
  },
];
