import React from 'react';

import { render } from '@testing-library/react';
import { ServiceNavButton } from 'components';
import { Gradients } from 'consts/colors';

describe('ServiceNavButton', () => {
  it('renders previous button successfully', () => {
    const { getByText, getByRole } = render(
      <ServiceNavButton
        title={'Augmentation'}
        color={Gradients.green}
        previousServiceUrl={'/services/augmentation'}
      />
    );

    expect(getByText('Augmentation')).toBeTruthy();
    expect(getByText('Previous')).toBeTruthy();
    expect(getByRole('img', { name: 'left-arrow' })).toBeTruthy();
  });

  it('renders next button successfully', () => {
    const { getByText, getByRole } = render(
      <ServiceNavButton
        title={'Delivery'}
        color={Gradients.yellow}
        next
        nextServiceUrl={'/services/delivery'}
      />
    );

    expect(getByText('Delivery')).toBeTruthy();
    expect(getByText('Next')).toBeTruthy();
    expect(getByRole('img', { name: 'right-arrow' })).toBeTruthy();
  });
});
