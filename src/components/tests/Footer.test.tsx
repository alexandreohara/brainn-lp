import React from 'react';

import { render } from '@testing-library/react';
import { Footer } from 'components';

describe('Footer', () => {
  it('renders successfully', () => {
    const { getByText, getByRole } = render(<Footer />);

    expect(getByText('We do digital.')).toBeTruthy();
    expect(getByText('You grow faster.')).toBeTruthy();
    expect(getByText('Become a Client')).toBeTruthy();
    expect(getByText('hello@brainn.co')).toBeTruthy();
    expect(getByRole('link', { name: 'Github' })).toBeTruthy();
    expect(
      getByRole('link', { name: '30 Fradique Coutinho St. São Paulo - Brazil' })
    ).toBeTruthy();
    expect(getByRole('img', { name: 'world-map' })).toBeTruthy();
  });
});
