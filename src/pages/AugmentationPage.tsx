import React from 'react';

import { Colors, Gradients } from 'consts/colors';
import { Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import Augmentation from 'assets/images/Augmentation.svg';
import Elixir from 'assets/icons/Elixir.svg';
import Ruby from 'assets/icons/Ruby.svg';
import ReactIcon from 'assets/icons/ReactIcon.svg';
import { Footer, ServiceAspect, ServiceNavButton } from 'components';
import { Routes } from 'consts/routes';

const StyledHeader = styled.div`
  background: ${Gradients.green};
  padding: 80px 164px 0;

  @media (max-width: 991px) {
    padding: 80px 20px 0;
  }
`;

const StyledServices = styled.div`
  color: ${Colors.white};
  font-size: 28px;

  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

const StyledAugmentation = styled.div`
  color: ${Colors.white};
  font-size: 80px;
  font-weight: bold;
  position: relative;

  @media (max-width: 991px) {
    font-size: 55px;
  }
`;

const StyledAugmentationShadow = styled.div`
  color: transparent;
  opacity: 0.2;
  font-size: 80px;
  font-weight: bold;
  -webkit-text-stroke: 2px ${Colors.white};
  position: absolute;
  top: 8px;
  left: 8px;

  @media (max-width: 991px) {
    font-size: 55px;
  }
`;

const StyledHeaderText = styled.div`
  margin-bottom: 32px;
`;

const StyledContentWrapper = styled.div`
  background-color: ${Colors.black};
  padding: 0 164px 120px 164px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const StyledPhrase = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: ${Colors.white};
  padding-top: 40px;
`;

const StyledHighlightedPhrase = styled.span`
  color: ${Colors.green};
`;

const StyledHowWeDoWrapper = styled.div`
  padding: 64px 0;
  font-size: 24px;
  letter-spacing: 1.2em;

  @media (max-width: 991px) {
    letter-spacing: 1em;
  }
`;

const StyledHowWeDo = styled.div`
  color: #5a646b;
  position: relative;
`;

const StyledHowWeDoShadow = styled.div`
  color: transparent;
  opacity: 0.25;
  -webkit-text-stroke: 1px #5a646b;
  position: absolute;
  top: 0px;
  left: 6px;

  @media (max-width: 991px) {
    letter-spacing: 1em;
  }
`;

const StyledServiceAspect = styled(Col)`
  margin-bottom: 30px;
`;

const StyledFooterWrapper = styled.div`
  background-color: ${Colors.lightNavy};
`;

const StyledNavButtonCol = styled(Col)`
  padding: 0;
`;

const StyledRow = styled(Row)`
  margin: 0;
`;

const AugmentationPage = () => {
  return (
    <>
      <StyledHeader>
        <StyledRow bottom={'xs'}>
          <Col xs={6}>
            <StyledHeaderText>
              <StyledServices>SERVICES</StyledServices>
              <StyledAugmentation>
                Augmentation
                <StyledAugmentationShadow>
                  Augmentation
                </StyledAugmentationShadow>
              </StyledAugmentation>
            </StyledHeaderText>
          </Col>
          <Col xs={6}>
            <img src={Augmentation} width={'100%'} alt={'augmentation'} />
          </Col>
        </StyledRow>
      </StyledHeader>
      <StyledContentWrapper>
        <StyledPhrase>
          Innovation happens if your team master new technologies and tools. We
          do exclusive exclusive team augmentation to our clients to keep
          innovating.{' '}
          <StyledHighlightedPhrase>
            The team that works.
          </StyledHighlightedPhrase>
        </StyledPhrase>

        <StyledHowWeDoWrapper>
          <StyledHowWeDo>
            HOW WE DO
            <StyledHowWeDoShadow>HOW WE DO</StyledHowWeDoShadow>
          </StyledHowWeDo>
        </StyledHowWeDoWrapper>

        <StyledRow>
          <StyledServiceAspect sm={12} md={6} lg={4}>
            <ServiceAspect
              color={Colors.purple}
              icon={Elixir}
              title={'Elixir'}
              description={
                'Elixir is our choice for building the backend of web and mobile applications. It is a functional language for scalable and easily maintainable code bases. The main reasons we have used Elixir in our teams: fault-tolerance, low-latency, and suitability for distributed systems. We are proud to be using Elixir and Phoenix since day one.'
              }
            />
          </StyledServiceAspect>
          <StyledServiceAspect sm={12} md={6} lg={4}>
            <ServiceAspect
              color={Colors.pink}
              icon={Ruby}
              title={'Ruby'}
              description={
                'Ruby is a very famous programming language, being used by companies of the life of Stripe, GitHub, Airbnb, Twitch, Instacart, and Coinbase. Our team is part of the Ruby community since the last decade. We have in-depth, hands-on experience building critical software with Ruby, enabling our clients to achieve success with faster go-to-market strategies.'
              }
            />
          </StyledServiceAspect>
          <StyledServiceAspect sm={12} md={6} lg={4}>
            <ServiceAspect
              color={Colors.lightBlue}
              icon={ReactIcon}
              title={'React'}
              description={
                'JavaScript is in the core of the modern web, and React is a framework that is maintained by Facebook and Instagram, while also being used by Netflix, Feedly, Airbnb, among many others. Its main advantages are related to scalability, like managing functional and class-based components, and its architecture that goes far beyond the HTML.'
              }
            />
          </StyledServiceAspect>
        </StyledRow>
      </StyledContentWrapper>

      <StyledRow>
        <StyledNavButtonCol xs={6}>
          <ServiceNavButton
            title={'Delivery'}
            color={Gradients.yellow}
            previousServiceUrl={Routes.delivery}
          />
        </StyledNavButtonCol>
        <StyledNavButtonCol xs={6}>
          <ServiceNavButton
            title={'Storming'}
            color={Gradients.blue}
            next
            nextServiceUrl={Routes.storming}
          />
        </StyledNavButtonCol>
      </StyledRow>

      <StyledFooterWrapper>
        <Footer />
      </StyledFooterWrapper>
    </>
  );
};

export default AugmentationPage;
