import React from 'react';

import { createMemoryHistory } from 'history';

import { fireEvent, render } from '@testing-library/react';
import { Navbar } from 'components';
import { Router } from 'react-router-dom';

describe('Navbar', () => {
  it('renders successfully', () => {
    const history = createMemoryHistory();
    const { getByText, getByRole } = render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    expect(getByText('brainn.co')).toBeTruthy();
    expect(getByText('Services')).toBeTruthy();
    expect(getByText('About us')).toBeTruthy();
    expect(getByRole('button', { name: 'Say hello' })).toBeTruthy();
  });

  it('Navigates to home page', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    fireEvent.click(getByText('brainn.co'));

    expect(history.location.pathname).toEqual('/');
  });

  it('Navigates to services page', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    fireEvent.click(getByText('Services'));

    expect(history.location.pathname).toEqual('/services');
  });

  it('Navigates to about us page', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    fireEvent.click(getByText('About us'));

    expect(history.location.pathname).toEqual('/about-us');
  });
});
