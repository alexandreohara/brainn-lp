import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import WorldMap from 'assets/images/WorldMap.svg';
import styled from 'styled-components';
import { MapPin } from './MapPin';
import { Colors } from 'consts/colors';
interface TextProps {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  margin?: string;
}

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

export const Footer = () => {
  return (
    <div style={{ paddingLeft: '64px', background: '#072337' }}>
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
            <StyledSubtitle>Github</StyledSubtitle>
          </StyledTextWrapper>

          <StyledDivider />

          <StyledTextWrapper>
            <StyledTextWithLeftBorder>Headquarter</StyledTextWithLeftBorder>
            <StyledSubtitle>
              30 Fradique Coutinho St. São Paulo - Brazil
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

            <StyledMap src={WorldMap} />
          </StyledMapWrapper>
        </Col>
      </Row>
    </div>
  );
};
