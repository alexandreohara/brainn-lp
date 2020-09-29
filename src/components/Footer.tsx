import React from 'react';

import { Col, Row } from 'react-flexbox-grid';
import WorldMap from 'assets/images/WorldMap.svg';
import styled from 'styled-components';
import { MapPin } from 'components';
import { Colors } from 'consts/colors';
interface TextProps {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  margin?: string;
}

const StyledFooter = styled.div`
  padding-left: 64px;
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

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const StyledSubtitle = styled.div`
  margin: 5px 8px;
  color: ${Colors.white};
  opacity: 0.8;
  font-size: 16px;

  @media (max-width: 767px) {
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

  @media (max-width: 767px) {
    font-size: 44px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;

  :visited {
    color: ${Colors.white};
  }
`;

const brainnGoogleMapsUrl =
  'https://www.google.com/maps/dir//R.+Fradique+Coutinho,+30+-+Pinheiros,+S%C3%A3o+Paulo+-+SP,+05416-000/@-23.5658389,-46.6864248,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94ce57760ffdd97d:0x9dd4a94d4147cb6!2m2!1d-46.6842361!2d-23.5658389!3e0';
const githubUrl = 'https://github.com/brainn-co';

export const Footer = () => {
  return (
    <StyledFooter>
      <Row>
        <Col xs={12} md={6}>
          <StyledTextWrapper color={'#546E82'} fontWeight={'bold'}>
            We do digital.
          </StyledTextWrapper>
          <StyledTextWrapper fontWeight={'bold'}>
            You grow faster.
          </StyledTextWrapper>

          <StyledDivider />

          <StyledTextWrapper>
            <StyledTextWithLeftBorder>Become a Client</StyledTextWithLeftBorder>
            <StyledSubtitle>hello@brainn.co</StyledSubtitle>
          </StyledTextWrapper>

          <StyledDivider />

          <StyledTextWrapper>
            <StyledTextWithLeftBorder>Open Source</StyledTextWithLeftBorder>
            <StyledSubtitle>
              <StyledLink href={githubUrl} target="_blank">
                Github
              </StyledLink>
            </StyledSubtitle>
          </StyledTextWrapper>

          <StyledDivider />

          <StyledTextWrapper>
            <StyledTextWithLeftBorder>Headquarter</StyledTextWithLeftBorder>
            <StyledSubtitle>
              <StyledLink href={brainnGoogleMapsUrl} target="_blank">
                30 Fradique Coutinho St. São Paulo - Brazil
              </StyledLink>
            </StyledSubtitle>
          </StyledTextWrapper>
        </Col>
        <Col md={6} className={'hidden-xs hidden-sm'}>
          <StyledMapWrapper>
            <MapPin top={'31%'} left={'13%'}>
              Vancouver
            </MapPin>
            <MapPin color={Colors.lightBlue} top={'38%'} left={'14%'}>
              San Francisco
            </MapPin>
            <MapPin color={Colors.lightBlue} top={'31%'} left={'60.5%'}>
              Amsterdam
            </MapPin>
            <MapPin color={Colors.yellow} top={'26%'} left={'56%'}>
              Dublin
            </MapPin>
            <MapPin color={Colors.purple} top={'36.5%'} left={'57%'}>
              Lisboa
            </MapPin>
            <MapPin color={Colors.green} top={'28%'} left={'63.5%'}>
              Berlin
            </MapPin>
            <MapPin top={'32%'} left={'64.5%'}>
              Trento
            </MapPin>

            <MapPin color={Colors.blue} top={'52%'} left={'45%'}>
              bla
            </MapPin>
            <MapPin color={Colors.yellow} top={'54.2%'} left={'43.8%'}>
              ble
            </MapPin>
            <MapPin color={Colors.purple} top={'55.8%'} left={'43%'}>
              bli
            </MapPin>
            <MapPin top={'58.3%'} left={'40%'}>
              blo
            </MapPin>
            <MapPin color={Colors.lightBlue} top={'56.5%'} left={'40%'}>
              blu
            </MapPin>
            <MapPin color={Colors.purple} top={'58.7%'} left={'37.7%'}>
              bah
            </MapPin>
            <MapPin color={Colors.green} top={'53.9%'} left={'38.4%'}>
              beh
            </MapPin>
            <MapPin top={'52.2%'} left={'40.7%'}>
              bih
            </MapPin>

            <StyledMap src={WorldMap} alt={'world-map'} />
          </StyledMapWrapper>
        </Col>
      </Row>
    </StyledFooter>
  );
};
