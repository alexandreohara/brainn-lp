import React from 'react';

import { render } from '@testing-library/react';
import { HomeCard } from 'components/Card';
import { Gradients } from 'consts/colors';
import Storming from 'assets/images/Storming.svg';
import Delivery from 'assets/images/Delivery.svg';

describe('Card', () => {
  it('renders text first true card successfully', () => {
    const description = [
      `We help innovators quickly understand how we will build their digital
        products and provide a competitive business advantage.`,
      `The idea that works.`,
    ];
    const { getByText, getByAltText } = render(
      <HomeCard
        key={0}
        color={Gradients.blue}
        title={'Storming'}
        textFirst={true}
        image={Storming}
        description={description}
        url={'/services/storming'}
      />
    );

    expect(getByText('Storming')).toBeTruthy();
    expect(
      getByText(
        'We help innovators quickly understand how we will build their digital products and provide a competitive business advantage.'
      )
    ).toBeTruthy();
    expect(getByText('The idea that works.')).toBeTruthy();
    expect(getByText('Meet our process')).toBeTruthy();
    expect(getByAltText('logo')).toBeTruthy();
  });

  it('renders text first false card successfully', () => {
    const description = [
      `We build high-quality digital products that scale. We do that through new technologies,
         great talents, and true agile methods.`,
      `The product that works.`,
    ];
    const { getByText, getByAltText } = render(
      <HomeCard
        key={0}
        color={Gradients.yellow}
        title={'Delivery'}
        textFirst={false}
        image={Delivery}
        description={description}
        url={'/services/delivery'}
      />
    );

    expect(getByText('Delivery')).toBeTruthy();
    expect(
      getByText(
        'We build high-quality digital products that scale. We do that through new technologies, great talents, and true agile methods.'
      )
    ).toBeTruthy();
    expect(getByText('The product that works.')).toBeTruthy();
    expect(getByText('Meet our process')).toBeTruthy();
    expect(getByAltText('logo')).toBeTruthy();
  });
});
