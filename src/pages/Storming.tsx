import { Colors, Gradients } from 'consts/colors';
import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import Storming from 'assets/images/Storming.svg';
import { ServiceAspect } from 'components/ServiceAspect';
import BenchmarkIcon from 'assets/icons/BenchmarkIcon.svg';
import { Footer } from 'components/Footer';
import { ServiceNavButton } from 'components/ServiceNavButton';

const StyledHeader = styled.div`
  background: ${Gradients.lightBlue};
  padding: 0 164px;

  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

const StyledServices = styled.div`
  color: ${Colors.white};
  font-size: 28px;
`;

const StyledStorming = styled.div`
  color: ${Colors.white};
  font-size: 80px;
  font-weight: bold;
  position: relative;
`;

const StyledStormingShadow = styled.div`
  color: transparent;
  opacity: 0.2;
  font-size: 80px;
  font-weight: bold;
  -webkit-text-stroke: 2px ${Colors.white};
  position: absolute;
  top: 8px;
  left: 8px;
`;

const StyledHeaderText = styled.div`
  margin-bottom: 32px;
`;

const StyledContentWrapper = styled.div`
  background-color: ${Colors.black};
  padding: 0 164px;

  @media (max-width: 767px) {
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
  color: ${Colors.blue};
`;

const StyledHowWeDoWrapper = styled.div`
  padding: 64px 0;
  font-size: 24px;
  letter-spacing: 1.2em;
`;

const StyledHowWeDoPhrase = styled.div`
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
`;

const StyledServiceAspect = styled(Col)`
  margin-bottom: 30px;
`;

const StyledFooterWrapper = styled.div`
  background-color: #072337;
`;

const StyledNavButtonCol = styled(Col)`
  padding: 0;
`;

const StyledNavButtonRow = styled(Row)`
  margin: 0;
`;

const StormingPage = () => {
  return (
    <>
      <StyledHeader>
        <Row bottom={'xs'}>
          <Col xs={6}>
            <StyledHeaderText>
              <StyledServices>SERVICES</StyledServices>
              <StyledStorming>
                Storming
                <StyledStormingShadow>Storming</StyledStormingShadow>
              </StyledStorming>
            </StyledHeaderText>
          </Col>
          <Col xs={6}>
            <img src={Storming} width={'100%'} />
          </Col>
        </Row>
      </StyledHeader>
      <StyledContentWrapper>
        <StyledPhrase>
          We help innovators quickly understand how we will build their digital
          products and provide a competitive business advantage.{' '}
          <StyledHighlightedPhrase>
            The idea that works.
          </StyledHighlightedPhrase>
        </StyledPhrase>

        <StyledHowWeDoWrapper>
          <StyledHowWeDoPhrase>
            HOW WE DO
            <StyledHowWeDoShadow>HOW WE DO</StyledHowWeDoShadow>
          </StyledHowWeDoPhrase>
        </StyledHowWeDoWrapper>

        <Row>
          <StyledServiceAspect xs={12} sm={6} md={4}>
            <ServiceAspect
              color={Colors.purple}
              icon={BenchmarkIcon}
              title={'Benchmark'}
              description={
                'Start learning from the experiences of others. That could lead us to find out about existing solutions to similar problems, and accelerate product ideation pace.'
              }
            />
          </StyledServiceAspect>
          <StyledServiceAspect xs={12} sm={6} md={4}>
            <ServiceAspect
              color={Colors.purple}
              icon={BenchmarkIcon}
              title={'Benchmark'}
              description={
                'Start learning from the experiences of others. That could lead us to find out about existing solutions to similar problems, and accelerate product ideation pace.'
              }
            />
          </StyledServiceAspect>
          <StyledServiceAspect xs={12} sm={6} md={4}>
            <ServiceAspect
              color={Colors.purple}
              icon={BenchmarkIcon}
              title={'Benchmark'}
              description={
                'Start learning from the experiences of others. That could lead us to find out about existing solutions to similar problems, and accelerate product ideation pace.'
              }
            />
          </StyledServiceAspect>
        </Row>

        <Row>
          <StyledServiceAspect xs={12} sm={6} md={4}>
            <ServiceAspect
              color={Colors.purple}
              icon={BenchmarkIcon}
              title={'Benchmark'}
              description={
                'Start learning from the experiences of others. That could lead us to find out about existing solutions to similar problems, and accelerate product ideation pace.'
              }
            />
          </StyledServiceAspect>
          <StyledServiceAspect xs={12} sm={6} md={4}>
            <ServiceAspect
              color={Colors.purple}
              icon={BenchmarkIcon}
              title={'Benchmark'}
              description={
                'Start learning from the experiences of others. That could lead us to find out about existing solutions to similar problems, and accelerate product ideation pace.'
              }
            />
          </StyledServiceAspect>
          <StyledServiceAspect xs={12} sm={6} md={4}>
            <ServiceAspect
              color={Colors.purple}
              icon={BenchmarkIcon}
              title={'Benchmark'}
              description={
                'Start learning from the experiences of others. That could lead us to find out about existing solutions to similar problems, and accelerate product ideation pace.'
              }
            />
          </StyledServiceAspect>
        </Row>
      </StyledContentWrapper>

      <StyledNavButtonRow>
        <StyledNavButtonCol xs={6}>
          <ServiceNavButton title={'Augmentation'} color={Gradients.green} />
        </StyledNavButtonCol>
        <StyledNavButtonCol xs={6}>
          <ServiceNavButton title={'Delivery'} color={Gradients.yellow} next />
        </StyledNavButtonCol>
      </StyledNavButtonRow>

      <StyledFooterWrapper>
        <Footer />
      </StyledFooterWrapper>
    </>
  );
};

export default StormingPage;
