import React from 'react';
import './components/Navbar.css';
import { NavButton } from './components/NavButton';

export const Home = () => {
  return (
    <div style={{ backgroundColor: '#021727' }}>
      <NavButton
        backgroundColor={'#007CF9'}
        textColor={'white'}
        lineHeight={'25px'}
        border={'2px solid rgba(0, 0, 0, 0.25)'}
      >
        Say hello
      </NavButton>
      <h2>Teste</h2>
    </div>
  );
};
