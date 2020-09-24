import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

window.scrollTo = jest.fn();

test('renders app correctly', () => {
  const { getByTestId } = render(<App />);
  const app = getByTestId('app-root');

  expect(app).toBeTruthy();
});
