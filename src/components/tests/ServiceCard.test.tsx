import React from 'react';

import { render } from '@testing-library/react';
import { ServiceCard } from 'components';
import { Gradients } from 'consts/colors';
import { Routes } from 'consts/routes';

describe('ServiceCard', () => {
  it('renders successfully', () => {
    const { getByText, getByRole } = render(
      <ServiceCard
        title={'Storming'}
        description={
          'We help innovators quickly understand how we will build their digital products and provide a competitive business advantage.'
        }
        strongLastPhrase={'The idea that works.'}
        color={Gradients.blue}
        url={Routes.storming}
      />
    );

    expect(getByText('Storming')).toBeTruthy();
    expect(
      getByText(
        'We help innovators quickly understand how we will build their digital products and provide a competitive business advantage.'
      )
    ).toBeTruthy();
    expect(getByText('The idea that works.')).toBeTruthy();
    expect(getByRole('img', { name: 'right-arrow' })).toBeTruthy();
  });
});
