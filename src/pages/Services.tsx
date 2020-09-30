import React from 'react';

import { Colors, Gradients } from 'consts/colors';
import { Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';

import { Footer, ServiceCard } from 'components';
import { Routes } from 'consts/routes';

const StyledPageWrapper = styled.div`
  padding-top: 80px;
  background-color: ${Colors.black};
`;

const StyledHeaderCol = styled(Col)`
  display: flex;
  align-items: center;
`;

const StyledHeader = styled.div`
  font-size: 88px;
  font-weight: bold;
  color: ${Colors.white};
  padding-left: 30px;
  width: 455px;

  @media (max-width: 1240px) {
    font-size: 70px;
    width: 360px;
  }

  @media (max-width: 991px) {
    font-size: 44px;
    padding: 40px 20px;
    width: 230px;
  }
`;

const StyledServiceCardsCol = styled(Col)`
  background-color: ${Colors.navy};
`;

const StyledCardPadding = styled.div`
  padding: 20px 15px;
`;

const StyledFooterWrapper = styled.div`
  background-color: ${Colors.lightNavy};
`;

const Services = () => {
  return (
    <StyledPageWrapper>
      <Row>
        <StyledHeaderCol md={12} lg={5}>
          <StyledHeader>Trusted by global innovators.</StyledHeader>
        </StyledHeaderCol>
        <StyledServiceCardsCol md={12} lg={7}>
          <StyledCardPadding>
            <ServiceCard
              title={'Storming'}
              description={
                'We help innovators quickly understand how we will build their digital products and provide a competitive business advantage.'
              }
              strongLastPhrase={'The idea that works.'}
              color={Gradients.blue}
              url={Routes.storming}
            />
          </StyledCardPadding>
          <StyledCardPadding>
            <ServiceCard
              title={'Delivery'}
              description={
                'We build high-quality digital products that scale. We do that through new technologies, great talents, and true agile methods.'
              }
              strongLastPhrase={'The product that works.'}
              color={Gradients.yellow}
              url={Routes.delivery}
            />
          </StyledCardPadding>
          <StyledCardPadding>
            <ServiceCard
              title={'Augmentation'}
              description={
                'We provide staff augmentation to high-growth tech companies using new programming languages to move faster.'
              }
              strongLastPhrase={'The team that works.'}
              color={Gradients.green}
              url={Routes.augmentation}
            />
          </StyledCardPadding>
        </StyledServiceCardsCol>
      </Row>
      <StyledFooterWrapper>
        <Footer />
      </StyledFooterWrapper>
    </StyledPageWrapper>
  );
};

export default Services;
