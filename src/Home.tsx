import React from 'react';
import './components/Navbar.css';
import { Col } from 'react-styled-flexboxgrid';
import HomeCard from './components/Card';
import Storming from './assets/Storming.svg';
import Delivery from './assets/Delivery.svg';
import Augmentation from './assets/Augmentation.svg';
import {
  HorizontalScroll,
  SliderCard,
  VerticalSeparator,
  HorizontalSeparator,
} from './components';
import { Footer } from './components/Footer';
import { ServiceCard } from 'components/ServiceCard';
import { Gradients } from 'consts/colors';

export const Home = () => {
  return (
    <div style={{ backgroundColor: '#021727' }}>
      <Col>
        {cardSections.map((props: any) => {
          return <HomeCard key={props.id} {...props} />;
        })}
      </Col>
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
      <VerticalSeparator />
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
      <div style={{ backgroundColor: '#031D30' }}>
        <ServiceCard
          title={'Storming'}
          description={
            'We help innovators quickly understand how we will build their digital products and provide a competitive business advantage.'
          }
          strongLastPhrase={'The idea that works.'}
          color={Gradients.blue}
        />
      </div>
      <Footer />
    </div>
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
