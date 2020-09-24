import React from 'react';

import { render } from '@testing-library/react';
import { HomeCard } from 'components/Card';
import { Gradients } from 'consts/colors';
import Storming from 'assets/images/Storming.svg';

describe('Card', () => {
  it('renders successfully', () => {
    const { getByText } = render(
      <HomeCard
        key={0}
        color={Gradients.blue}
        title={'Storming'}
        textFirst={true}
        image={Storming}
        description={[
          `We help innovators quickly understand how we will build their digital
          products and provide a competitive business advantage.`,
          `The idea that works.`,
        ]}
        url={'/services/storming'}
      ></HomeCard>
    );

    expect(getByText('Storming')).toBeTruthy();
  });
});
