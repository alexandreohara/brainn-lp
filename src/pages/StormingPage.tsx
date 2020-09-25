import React from 'react';

import { Colors, Gradients } from 'consts/colors';
import { Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import Storming from 'assets/images/Storming.svg';
import Benchmark from 'assets/icons/Benchmark.svg';
import Inception from 'assets/icons/Inception.svg';
import Roadmap from 'assets/icons/Roadmap.svg';
import Architecture from 'assets/icons/Architecture.svg';
import Prototype from 'assets/icons/Prototype.svg';
import Validation from 'assets/icons/Validation.svg';

import { Footer, ServiceAspect, ServiceNavButton } from 'components';

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

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const StyledStorming = styled.div`
  color: ${Colors.white};
  font-size: 80px;
  font-weight: bold;
  position: relative;

  @media (max-width: 767px) {
    font-size: 68px;
  }
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

  @media (max-width: 767px) {
    font-size: 68px;
  }
`;

const StyledHeaderText = styled.div`
  margin-bottom: 32px;
`;

const StyledContentWrapper = styled.div`
  background-color: ${Colors.black};
  padding: 0 164px 120px 164px;

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
  padding-top: 80px;
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
            <img src={Storming} width={'100%'} alt={'storming'} />
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
              icon={Benchmark}
              title={'Benchmark'}
              description={
                'Start learning from the experiences of others. That could lead us to find out about existing solutions to similar problems, and accelerate product ideation pace.'
              }
            />
          </StyledServiceAspect>
          <StyledServiceAspect xs={12} sm={6} md={4}>
            <ServiceAspect
              color={Colors.yellow}
              icon={Inception}
              title={'Inception'}
              description={
                "There's always an infinite number of good possibilities for solving problems. We should explore the most viable options, focusing on designing loveable experiences."
              }
            />
          </StyledServiceAspect>
          <StyledServiceAspect xs={12} sm={6} md={4}>
            <ServiceAspect
              color={Colors.blue}
              icon={Roadmap}
              title={'Roadmap'}
              description={
                'Planning a digital product means getting the hands dirty. Auditing contents, performing heuristic analysis and building a beautiful roadmap that will make everything clear.'
              }
            />
          </StyledServiceAspect>
        </Row>

        <Row>
          <StyledServiceAspect xs={12} sm={6} md={4}>
            <ServiceAspect
              color={Colors.pink}
              icon={Architecture}
              title={'Architecture'}
              description={
                'To be ready to scale, we need to think carefully and with a domain-driven design mindset. We must be careful to avoid pitfalls to scale faster later.'
              }
            />
          </StyledServiceAspect>
          <StyledServiceAspect xs={12} sm={6} md={4}>
            <ServiceAspect
              color={Colors.lightBlue}
              icon={Prototype}
              title={'Prototype'}
              description={
                "Prototyping is the most efficient way to build a shared product vision. It's fast, valuable, and everybody gets on the same page before any design library is born."
              }
            />
          </StyledServiceAspect>
          <StyledServiceAspect xs={12} sm={6} md={4}>
            <ServiceAspect
              color={Colors.green}
              icon={Validation}
              title={'Validation'}
              description={
                'Before building something new, it is necessary to obtain quick feedback from users and stakeholders to validate that we are on the right track and ready to adapt.'
              }
            />
          </StyledServiceAspect>
        </Row>
      </StyledContentWrapper>

      <StyledNavButtonRow>
        <StyledNavButtonCol xs={6}>
          <ServiceNavButton
            title={'Augmentation'}
            color={Gradients.green}
            previousServiceUrl={'/services/augmentation'}
          />
        </StyledNavButtonCol>
        <StyledNavButtonCol xs={6}>
          <ServiceNavButton
            title={'Delivery'}
            color={Gradients.yellow}
            next
            nextServiceUrl={'/services/delivery'}
          />
        </StyledNavButtonCol>
      </StyledNavButtonRow>

      <StyledFooterWrapper>
        <Footer />
      </StyledFooterWrapper>
    </>
  );
};

export default StormingPage;
