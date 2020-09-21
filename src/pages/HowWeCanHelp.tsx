import { Footer } from 'components/Footer';
import { ServiceAspect } from 'components/ServiceAspect';
import { Colors, Gradients } from 'consts/colors';
import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import Rocket from 'assets/icons/Rocket.svg';
import DataPurple from 'assets/icons/DataPurple.svg';
import Prototype from 'assets/icons/Prototype.svg';
import Architecture from 'assets/icons/Architecture.svg';
import VectorRight from 'assets/icons/VectorRight.svg';

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

const StyledServiceAspects = styled.div`
  background-color: #031d30;
  padding-bottom: 40px;
  padding-top: 32px;
`;

const StyledAspectWrapper = styled.div`
  padding: 20px 64px;
`;

const StyledFooterWrapper = styled.div`
  background-color: #072337;
`;

const StyledButton = styled.div`
  background: ${Gradients.blue};
  margin: 20px 64px;
  padding: 48px;
  border-radius: 16px;
  text-align: center;
  color: ${Colors.white};

  @media (max-width: 767px) {
    padding: 22px;
  }
`;

const StyledButtonTitle = styled.div`
  font-size: 48px;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const StyledSeeMore = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-top: 32px;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const StyledVectorRight = styled.img`
  width: 12px;
  margin-left: 12px;

  @media (max-width: 767px) {
    width: 8px;
  }
`;

const HowWeCanHelp = () => {
  return (
    <>
      <StyledPageWrapper>
        <Row>
          <Col xs={12} sm={5} style={{ display: 'flex', alignItems: 'center' }}>
            <StyledHeader>How we can help</StyledHeader>
          </Col>
          <Col xs={12} sm={7}>
            <StyledServiceAspects>
              <StyledAspectWrapper>
                <ServiceAspect
                  color={Colors.yellow}
                  icon={Rocket}
                  title={'Launch innovative digital products'}
                  description={
                    'Deliver a solution that works. We help digital innovators - from startups to big companies - bring their ideas to life, launch an entirely new business, or increase their solutions portfolio. Our experts collaborate with you to quickly gather all must-have requirements, choose the right architecture, and design the best user experience. And then, launch continuously.'
                  }
                />
              </StyledAspectWrapper>
              <StyledAspectWrapper>
                <ServiceAspect
                  color={Colors.purple}
                  icon={DataPurple}
                  title={'Meet deadlines within your digital efforts'}
                  description={
                    'Practice a methodology that works. When business opportunities arise, our clients rely on our disciplined teams working and collaborating with their domain experts - done the right way. Agile metrics and iterative execution are the secret sauce of our teams working with the business people who need answers. Fall in love with predictability, collaboration, noise reduction, and releases again.'
                  }
                />
              </StyledAspectWrapper>
              <StyledAspectWrapper>
                <ServiceAspect
                  color={Colors.lightBlue}
                  icon={Prototype}
                  title={'Increase quality to regain trust from your users'}
                  description={
                    'Deliver a code that works. Yeah, we know that. The "let it crash" culture was everywhere, and it is tough to avoid it. We help our clients fix it with extreme programming practices and values, also applying shifting paradigms in computer programming to build resilient and healthy code bases. There is no need to break your users’ passion for your product when they need you the most.'
                  }
                />
              </StyledAspectWrapper>
              <StyledAspectWrapper>
                <ServiceAspect
                  color={Colors.pink}
                  icon={Architecture}
                  title={'Improve your architecture and scale faster'}
                  description={
                    'Build an architecture that works. A scalable architecture is essential to allow you to cultivate a growing user base. The higher the number of transactions, the more robust the architecture must be. We work with our global clients breaking their monoliths (and teams) into microservices, applying new paradigms, including event-driven architectures (EDA) and tools like Elixir and Golang.'
                  }
                />
              </StyledAspectWrapper>
              <StyledButton>
                <StyledButtonTitle>Interested?</StyledButtonTitle>
                <StyledButtonTitle>Meet our process</StyledButtonTitle>
                <StyledSeeMore>
                  <StyledVectorRight src={VectorRight} alt={'vector-right'} />
                </StyledSeeMore>
              </StyledButton>
            </StyledServiceAspects>
          </Col>
        </Row>
      </StyledPageWrapper>
      <StyledFooterWrapper>
        <Footer />
      </StyledFooterWrapper>
    </>
  );
};

export default HowWeCanHelp;
