import React from 'react';

import { render } from '@testing-library/react';
import { ServiceAspect } from 'components';
import { Colors } from 'consts/colors';
import Benchmark from 'assets/icons/Benchmark.svg';

describe('ServiceAspect', () => {
  it('renders successfully', () => {
    const { getByText, getByRole } = render(
      <ServiceAspect
        color={Colors.purple}
        icon={Benchmark}
        title={'Benchmark'}
        description={
          'Start learning from the experiences of others. That could lead us to find out about existing solutions to similar problems, and accelerate product ideation pace.'
        }
      />
    );

    expect(getByText('Benchmark')).toBeTruthy();
    expect(
      getByText(
        'Start learning from the experiences of others. That could lead us to find out about existing solutions to similar problems, and accelerate product ideation pace.'
      )
    ).toBeTruthy();
    expect(getByRole('img', { name: 'service-icon' })).toBeTruthy();
  });
});
