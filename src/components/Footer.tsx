import React from 'react';

import { Col, Row } from 'react-flexbox-grid';
import WorldMap from 'assets/images/WorldMap.svg';
import styled from 'styled-components';
import { MapPin } from 'components';
import { Colors } from 'consts/colors';
import { EMAIL, GITHUB_URL, GOOGLE_MAPS_URL } from 'consts/links';
interface TextProps {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  margin?: string;
}

const StyledFooter = styled.div`
  padding: 55px 0 0 64px;

  @media (max-width: 991px) {
    padding: 15px 0 40px 20px;
  }
`;

const StyledMap = styled.img`
  opacity: 0.5;
  width: 100%;
`;

const StyledMapWrapper = styled.div`
  position: relative;
`;

const StyledDivider = styled.div`
  background-color: ${Colors.white};
  width: 100%;
  height: 1px;
  opacity: 0.15;
  margin: 10px 0;
`;

const StyledTextWithLeftBorder = styled.div`
  border-left: 1px solid ${Colors.blue};
  padding-left: 5px;
  margin: 5px 0;
  font-weight: bold;
  font-size: 24px;

  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

const StyledSubtitle = styled.div`
  margin: 5px 8px;
  color: ${Colors.white};
  opacity: 0.8;
  font-size: 16px;

  @media (max-width: 991px) {
    font-size: 12px;
  }
`;

const StyledTextWrapper = styled.div`
  margin: 25px 0;
  color: ${Colors.white};
  font-size: 80px;
  ${(props: TextProps) =>
    props &&
    `
      font-size: ${props.fontSize};
      color: ${props.color};
      font-weight: ${props.fontWeight};
      margin: ${props.margin};
    `}

  @media (max-width: 1330px) {
    font-size: 58px;
  }

  @media (max-width: 991px) {
    font-size: 44px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;

  :visited {
    color: ${Colors.white};
  }
`;

const StyledRow = styled(Row)`
  margin: 0;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledRow>
        <Col md={12} lg={6}>
          <StyledTextWrapper color={'#546E82'} fontWeight={'bold'}>
            We do digital.
          </StyledTextWrapper>
          <StyledTextWrapper fontWeight={'bold'}>
            You grow faster.
          </StyledTextWrapper>

          <StyledDivider />

          <StyledLink href={`mailto: ${EMAIL}`} target="_blank">
            <StyledTextWrapper>
              <StyledTextWithLeftBorder>
                Become a Client
              </StyledTextWithLeftBorder>
              <StyledSubtitle>{EMAIL}</StyledSubtitle>
            </StyledTextWrapper>
          </StyledLink>

          <StyledDivider />

          <StyledLink href={GITHUB_URL} target="_blank">
            <StyledTextWrapper>
              <StyledTextWithLeftBorder>Open Source</StyledTextWithLeftBorder>
              <StyledSubtitle>Github</StyledSubtitle>
            </StyledTextWrapper>
          </StyledLink>

          <StyledDivider />

          <StyledLink href={GOOGLE_MAPS_URL} target="_blank">
            <StyledTextWrapper>
              <StyledTextWithLeftBorder>Headquarter</StyledTextWithLeftBorder>
              <StyledSubtitle>
                30 Fradique Coutinho St. São Paulo - Brazil
              </StyledSubtitle>
            </StyledTextWrapper>
          </StyledLink>
        </Col>
        <Col lg={6} className={'hidden-xs hidden-sm hidden-md'}>
          <StyledMapWrapper>
            <MapPin top={'31%'} left={'13%'}>
              Vancouver, Canada
            </MapPin>
            <MapPin color={Colors.lightBlue} top={'38%'} left={'14%'}>
              San Francisco, USA
            </MapPin>
            <MapPin color={Colors.lightBlue} top={'31%'} left={'60.5%'}>
              Amsterdam, Netherlands
            </MapPin>
            <MapPin color={Colors.yellow} top={'26%'} left={'56%'}>
              Dublin, Ireland
            </MapPin>
            <MapPin color={Colors.purple} top={'36.5%'} left={'57%'}>
              Lisboa, Portugal
            </MapPin>
            <MapPin color={Colors.green} top={'28%'} left={'63.5%'}>
              Berlin, Germany
            </MapPin>
            <MapPin top={'32%'} left={'64.5%'}>
              Trento, Italy
            </MapPin>
            <MapPin color={Colors.blue} top={'53%'} left={'44.7%'}>
              Bahia
            </MapPin>
            <MapPin color={Colors.yellow} top={'55.7%'} left={'43%'}>
              Rio de Janeiro
            </MapPin>
            <MapPin color={Colors.purple} top={'59%'} left={'43%'}>
              Espírito Santo
            </MapPin>
            <MapPin top={'53.2%'} left={'39.5%'}>
              Minas Gerais
            </MapPin>
            <MapPin color={Colors.lightBlue} top={'57%'} left={'39%'}>
              São Paulo
            </MapPin>
            <MapPin color={Colors.purple} top={'59%'} left={'35%'}>
              Santa Catarina
            </MapPin>
            <MapPin color={Colors.green} top={'55%'} left={'35.5%'}>
              Goiás
            </MapPin>
            <MapPin color={Colors.blue} top={'60.2%'} left={'39%'}>
              Paraná
            </MapPin>
            <MapPin top={'62.5%'} left={'36.2%'}>
              Rio Grande do Sul
            </MapPin>

            <StyledMap src={WorldMap} alt={'world-map'} />
          </StyledMapWrapper>
        </Col>
      </StyledRow>
    </StyledFooter>
  );
};
