import React from 'react';

import { Colors, Gradients } from 'consts/colors';
import { Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import Delivery from 'assets/images/Delivery.svg';
import Team from 'assets/icons/Team.svg';
import Star from 'assets/icons/Star.svg';
import Programming from 'assets/icons/Programming.svg';
import Data from 'assets/icons/Data.svg';
import ReactIcon from 'assets/icons/ReactIcon.svg';
import PhaseOut from 'assets/icons/PhaseOut.svg';
import { Footer, ServiceAspect, ServiceNavButton } from 'components';
import { Routes } from 'consts/routes';

const StyledHeader = styled.div`
  background: ${Gradients.yellow};
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

const StyledDelivery = styled.div`
  color: ${Colors.white};
  font-size: 80px;
  font-weight: bold;
  position: relative;

  @media (max-width: 991px) {
    font-size: 55px;
  }
`;

const StyledDeliveryShadow = styled.div`
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
  color: ${Colors.yellow};
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

const DeliveryPage = () => {
  return (
    <>
      <StyledHeader>
        <StyledRow bottom={'xs'}>
          <Col xs={6}>
            <StyledHeaderText>
              <StyledServices>SERVICES</StyledServices>
              <StyledDelivery>
                Delivery
                <StyledDeliveryShadow>Delivery</StyledDeliveryShadow>
              </StyledDelivery>
            </StyledHeaderText>
          </Col>
          <Col xs={6}>
            <img src={Delivery} width={'100%'} alt={'delivery'} />
          </Col>
        </StyledRow>
      </StyledHeader>
      <StyledContentWrapper>
        <StyledPhrase>
          We build high-quality digital products that scale. We do that through
          new technologies, great talents, and correct agile methods.{' '}
          <StyledHighlightedPhrase>
            The product that works.
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
              icon={Team}
              title={'Small teams'}
              description={
                'We work as small teams that have agile project managers, designers, and engineers. That could mean a full-solution group or a staff augmentation to your current unit.'
              }
            />
          </StyledServiceAspect>
          <StyledServiceAspect sm={12} md={6} lg={4}>
            <ServiceAspect
              color={Colors.yellow}
              icon={Star}
              title={'Senior professionals'}
              description={
                'To solve technical challenges with small teams, we bring skilled professionals together in each of our teams, in close collaboration with your team.'
              }
            />
          </StyledServiceAspect>
          <StyledServiceAspect sm={12} md={6} lg={4}>
            <ServiceAspect
              color={Colors.blue}
              icon={Programming}
              title={'Extreme programming'}
              description={
                'We have chosen extreme programming practices because we believe it is the best definitive Agile framework, besides being the least corrupted by fads.'
              }
            />
          </StyledServiceAspect>

          <StyledServiceAspect sm={12} md={6} lg={4}>
            <ServiceAspect
              color={Colors.pink}
              icon={Data}
              title={'Data-informed process'}
              description={
                "We solve business challenges that are relevant to our clients. That's why we apply process metrics to allow them to make data-informed decisions in their products."
              }
            />
          </StyledServiceAspect>
          <StyledServiceAspect sm={12} md={6} lg={4}>
            <ServiceAspect
              color={Colors.lightBlue}
              icon={ReactIcon}
              title={'Scalable technologies'}
              description={
                'Our stack combines the best for web and mobile, including Elixir, Ruby, Flutter, and Javascript. That includes higher grade scalability, patterns and paradigms.'
              }
            />
          </StyledServiceAspect>
          <StyledServiceAspect sm={12} md={6} lg={4}>
            <ServiceAspect
              color={Colors.green}
              icon={PhaseOut}
              title={'Planned phase-out'}
              description={
                'There is a need to perpetuate our innovative efforts. After scaling the products, we help our clients train their teams to continue sustaining the new technology.'
              }
            />
          </StyledServiceAspect>
        </StyledRow>
      </StyledContentWrapper>

      <StyledRow>
        <StyledNavButtonCol xs={6}>
          <ServiceNavButton
            title={'Storming'}
            color={Gradients.blue}
            previousServiceUrl={Routes.storming}
          />
        </StyledNavButtonCol>
        <StyledNavButtonCol xs={6}>
          <ServiceNavButton
            title={'Augmentation'}
            color={Gradients.green}
            next
            nextServiceUrl={Routes.augmentation}
          />
        </StyledNavButtonCol>
      </StyledRow>

      <StyledFooterWrapper>
        <Footer />
      </StyledFooterWrapper>
    </>
  );
};

export default DeliveryPage;
