import React from 'react';

import { Colors, Gradients } from 'consts/colors';
import { Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';

import { Footer, ServiceCard } from 'components';

const StyledPageWrapper = styled.div`
  background-color: ${Colors.black};
`;

const StyledHeader = styled.div`
  font-size: 88px;
  font-weight: bold;
  color: ${Colors.white};
  overflow-x: hidden;
  padding-left: 30px;

  @media (max-width: 767px) {
    font-size: 44px;
    padding: 40px 20px;
  }
`;

const StyledServiceCards = styled.div`
  background-color: #031d30;
`;

const StyledCardWrapper = styled.div`
  padding: 20px 15px;
`;

const StyledFooterWrapper = styled.div`
  background-color: #072337;
`;

const Services = () => {
  return (
    <>
      <StyledPageWrapper>
        <Row>
          <Col xs={12} sm={5} style={{ display: 'flex', alignItems: 'center' }}>
            <StyledHeader>Trusted by global innovators.</StyledHeader>
          </Col>
          <Col xs={12} sm={7}>
            <StyledServiceCards>
              <StyledCardWrapper>
                <ServiceCard
                  title={'Storming'}
                  description={
                    'We help innovators quickly understand how we will build their digital products and provide a competitive business advantage.'
                  }
                  strongLastPhrase={'The idea that works.'}
                  color={Gradients.blue}
                />
              </StyledCardWrapper>
              <StyledCardWrapper>
                <ServiceCard
                  title={'Delivery'}
                  description={
                    'We build high-quality digital products that scale. We do that through new technologies, great talents, and true agile methods.'
                  }
                  strongLastPhrase={'The product that works.'}
                  color={Gradients.yellow}
                />
              </StyledCardWrapper>
              <StyledCardWrapper>
                <ServiceCard
                  title={'Augmentation'}
                  description={
                    'We provide staff augmentation to high-growth tech companies using new programming languages to move faster.'
                  }
                  strongLastPhrase={'The team that works.'}
                  color={Gradients.green}
                />
              </StyledCardWrapper>
            </StyledServiceCards>
          </Col>
        </Row>
      </StyledPageWrapper>
      <StyledFooterWrapper>
        <Footer />
      </StyledFooterWrapper>
    </>
  );
};

export default Services;
