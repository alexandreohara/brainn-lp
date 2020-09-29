import React from 'react';

import { render } from '@testing-library/react';
import { SliderCard } from 'components';

describe('SliderCard', () => {
  it('renders successfully', () => {
    const { getByText } = render(
      <SliderCard
        title={'Launch innovative digital products'}
        decorationLine={{
          deg: 260.39,
          startColor: '#FFD15C',
          endColor: '#FF912C',
        }}
      />
    );

    expect(getByText('Launch innovative digital products')).toBeTruthy();
    expect(getByText('SEE MORE')).toBeTruthy();
  });
});
