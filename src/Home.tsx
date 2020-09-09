import React from 'react';
import './components/Navbar.css';
import { Carousel } from './components/Carousel';

export const Home = () => {
  return (
    <div
      style={{
        backgroundColor: '#072337',
      }}
    >
      <div style={{ height: '100px' }}></div>
      <Carousel />
    </div>
  );
};
