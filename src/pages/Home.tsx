import React from 'react';

import './Home.css';
import { Col, Row } from 'react-flexbox-grid';
import Storming from 'assets/images/Storming.svg';
import Delivery from 'assets/images/Delivery.svg';
import Augmentation from 'assets/images/Augmentation.svg';
import TypeLogo from 'assets/images/TypeLogo.png';
import Suflex from 'assets/images/Suflex.png';
import Kovi from 'assets/images/Kovi.png';
import Cvc from 'assets/images/Cvc.png';
import Bxblue from 'assets/images/Bxblue.png';
import Bv from 'assets/images/Bv.png';
import Gupy from 'assets/images/Gupy.png';
import FindHotel from 'assets/images/FindHotel.png';
import Poliedro from 'assets/images/Poliedro.png';
import Pipefy from 'assets/images/Pipefy.png';
import Neo from 'assets/images/Neo.png';
import {
  HomeCard,
  Footer,
  HorizontalScroll,
  SliderCard,
  VerticalSeparator,
  HorizontalSeparator,
} from 'components';
import styled from 'styled-components';
import { Colors, Gradients } from 'consts/colors';

const StyledHome = styled.div`
  background-color: ${Colors.black};
`;

const StyledHeaderTitle = styled.div`
  padding-left: 64px;
  padding-top: 40px;
  font-size: 88px;
  font-weight: bold;
  color: ${Colors.white};
  width: 768px;

  @media (max-width: 767px) {
    font-size: 44px;
    width: 320px;
    padding-left: 20px;
  }
`;

const StyledHowWeCanHelp = styled.div`
  padding-left: 64px;
  padding-top: 40px;
  font-size: 80px;
  font-weight: bold;
  color: ${Colors.white};

  @media (max-width: 767px) {
    font-size: 44px;
    padding-left: 20px;
  }
`;

const StyledCaption = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.white};
  opacity: 0.24;
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

const StyledColumn = styled(Col)`
  align-self: center;
`;

const StyledPadding = styled.div`
  padding: 64px;

  @media (max-width: 767px) {
    padding-left: 20px;
  }
`;

const Home = () => {
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
          <StyledColumn>
            <img src={Kovi} alt={'Kovi'}></img>
          </StyledColumn>
          <StyledColumn>
            <img src={Poliedro} alt={'Poliedro'}></img>
          </StyledColumn>
          <StyledColumn>
            <img src={FindHotel} alt={'Find Hotel'}></img>
          </StyledColumn>
          <StyledColumn>
            <img src={Neo} alt={'Neo'}></img>
          </StyledColumn>
          <StyledColumn>
            <img src={Suflex} alt={'Suflex'}></img>
          </StyledColumn>
          <StyledColumn>
            <img src={Cvc} alt={'CVC'}></img>
          </StyledColumn>
          <StyledColumn>
            <img src={Pipefy} alt={'Pipefy'}></img>
          </StyledColumn>
          <StyledColumn>
            <img src={Bxblue} alt={'BxBlue'}></img>
          </StyledColumn>
          <StyledColumn>
            <img src={Bv} alt={'BV'}></img>
          </StyledColumn>
          <StyledColumn>
            <img src={Gupy} alt={'Gupy'}></img>
          </StyledColumn>
        </StyledLogos>
      </HorizontalScroll>
      <StyledCaption>Trusted by global innovators</StyledCaption>
      <StyledHowWeCanHelp>How we can help</StyledHowWeCanHelp>
      <StyledPadding>
        <HorizontalScroll>
          {SLIDER_CARDS.map((card, index) => (
            <React.Fragment key={index}>
              <SliderCard
                decorationLine={card.decorationLine}
                title={card.title}
              />
              {index !== SLIDER_CARDS.length && <HorizontalSeparator />}
            </React.Fragment>
          ))}
        </HorizontalScroll>
        <VerticalSeparator size={64} />
        <Col>
          {cardSections.map((props: any, index) => {
            return (
              <React.Fragment key={index}>
                <HomeCard
                  color={props.color}
                  title={props.title}
                  textFirst={props.textFirst}
                  image={props.image}
                  description={props.description}
                  url={props.url}
                />
                ;
                <VerticalSeparator size={64} />
              </React.Fragment>
            );
          })}
        </Col>
      </StyledPadding>
      <Footer />
    </StyledHome>
  );
};

export default Home;

const cardSections = [
  {
    color: Gradients.blue,
    title: 'Storming',
    textFirst: true,
    image: Storming,
    description: [
      `We help innovators quickly understand how we will build their digital
    products and provide a competitive business advantage.`,
      `The idea that works.`,
    ],
    url: '/services/storming',
  },

  {
    color: Gradients.yellow,
    title: 'Delivery',
    textFirst: false,
    image: Delivery,
    description: [
      `We build high-quality digital products that scale. We do that through new technologies,
       great talents, and true agile methods.`,
      `The product that works.`,
    ],
    url: '/services/delivery',
  },

  {
    color: Gradients.green,
    title: 'Augmentation',
    textFirst: false,
    image: Augmentation,
    description: [
      `We provide staff augmentation to high-growth tech companies using new programming languages to move faster.`,
      `The team that works.`,
    ],
    url: '/services/augmentation',
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
