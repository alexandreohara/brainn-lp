import React from 'react';
import './components/Navbar.css';
import { Col } from 'react-styled-flexboxgrid';
import HomeCard from './components/Card';
import Storming from './assets/Storming.svg';
import Delivery from './assets/Delivery.svg';
import Augmentation from './assets/Augmentation.svg';

export const Home = () => {
  return (
    <Col>
      {cardSections.map((props: any) => {
        return <HomeCard {...props} />;
      })}
    </Col>
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
