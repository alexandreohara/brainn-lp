import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import Card from './components/Card';

export const Home = () => {
  return (
    <Grid>
      <Row>
        <Col xs={6} md={3}>
          <Card
            deg={260.39}
            startColor={'#00BEFB'}
            endColor={'#007CF9'}
            title={'Storming'}
            description={[
              `We help innovators quickly understand how we will build their digital
            products and provide a competitive business advantage.`,
              `The idea that
            works.`,
            ]}
          ></Card>
        </Col>
      </Row>
    </Grid>
  );
};
