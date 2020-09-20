import React from 'react';
import './components/Navbar.css';
import './Home.css';
import { Col, Row } from 'react-flexbox-grid';
import HomeCard from './components/Card';
import Storming from './assets/Storming.svg';
import Delivery from './assets/Delivery.svg';
import Augmentation from './assets/Augmentation.svg';
import TypeLogo from './assets/TypeLogo.png';
import Suflex from './assets/Suflex.png';
import Kovi from './assets/Kovi.png';
import Cvc from './assets/Cvc.png';
import Bxblue from './assets/Bxblue.png';
import Bv from './assets/Bv.png';
import Gupy from './assets/Gupy.png';
import FindHotel from './assets/FindHotel.png';
import Poliedro from './assets/Poliedro.png';
import Pipefy from './assets/Pipefy.png';
import Neo from './assets/Neo.png';
import {
  HorizontalScroll,
  SliderCard,
  VerticalSeparator,
  HorizontalSeparator,
} from './components';
import { Footer } from './components/Footer';
import styled from 'styled-components';

export const Home = () => {
  return (
    <div style={{ backgroundColor: '#021727' }}>
      <Row>
        <Col xs={4} sm={6}>
          <div
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '72px',
              marginLeft: '64px',
            }}
          >
            <h1>Lean digital innovation that works. </h1>
          </div>
        </Col>
        <Col xs={8} sm={6}>
          <StyledImage>
            <img src={TypeLogo}></img>
          </StyledImage>
        </Col>
      </Row>
      <HorizontalScroll>
        <div
          style={{
            padding: '64px',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            minWidth: '1200px',
          }}
        >
          <div className={'column'}>
            <img src={Kovi}></img>
          </div>
          <div className={'column'}>
            <img src={Poliedro}></img>
          </div>
          <div className={'column'}>
            <img src={FindHotel}></img>
          </div>
          <div className={'column'}>
            <img src={Neo}></img>
          </div>
          <div className={'column'}>
            <img src={Suflex}></img>
          </div>
          <div className={'column'}>
            <img src={Cvc}></img>
          </div>
          <div className={'column'}>
            <img src={Pipefy}></img>
          </div>
          <div className={'column'}>
            <img src={Bxblue}></img>
          </div>
          <div className={'column'}>
            <img src={Bv}></img>
          </div>
          <div className={'column'}>
            <img src={Gupy}></img>
          </div>
        </div>
      </HorizontalScroll>
      <div style={{ padding: '64px' }}>
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
      </div>
      <Footer />
    </div>
  );
};

const StyledImage = styled.div`
  width: 100%;
  max-width: 800px;
  min-width: 300px;
`;

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
