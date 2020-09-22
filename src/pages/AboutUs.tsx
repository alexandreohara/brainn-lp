import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import BoardPostitPhoto from 'assets/images/BoardPostitPhoto.png';
import CelebratingPhoto from 'assets/images/CelebratingPhoto.png';
import CodingPhoto from 'assets/images/CodingPhoto.png';
import MeetingPhoto from 'assets/images/MeetingPhoto.png';
import ProductCanvasPhoto from 'assets/images/ProductCanvasPhoto.png';
import WritingWallPostitPhoto from 'assets/images/WritingWallPostitPhoto.png';

const StyledHeader = styled.div`
  margin: 80px 288px 37px;
  text-align: center;
`;

const StyledHeaderTitle = styled.div`
  font-size: 88px;
  font-weight: bold;
`;

const StyledHeaderText = styled.div`
  font-size: 36px;
  padding-top: 32px;
`;

const StyledRow = styled(Row)`
  margin: 0;
`;

const StyledCol = styled(Col)`
  padding: 0;
`;

const StyledImgWrapper = styled.div`
  overflow: hidden;
  text-align: center;
`;

const StyledMiddleImgWrapper = styled.div`
  overflow: hidden;
  text-align: center;
  margin: 0 8px;
`;

const AboutUs = () => {
  return (
    <>
      <StyledHeader>
        <StyledHeaderTitle>Meet brainn.co</StyledHeaderTitle>
        <StyledHeaderText>
          We want to break the &quot;let it brake&quot; software culture. We see
          no more business or technical reasons for skipping the good practices
          of the clean and maintainable code base, scalable architecture,
          decoupled teams strategies, and authentic agile practices. Partnering
          with true digital innovators, both startups and enterprises, we apply
          modern technologies, new concepts, and frameworks to solve real-world
          problems in fast-paced environments.
        </StyledHeaderText>
      </StyledHeader>
      <StyledRow>
        <StyledCol md={4}>
          <StyledImgWrapper>
            <img src={BoardPostitPhoto} alt={'board-postit-photo'} />
          </StyledImgWrapper>
        </StyledCol>

        <StyledCol md={4}>
          <StyledMiddleImgWrapper>
            <img src={ProductCanvasPhoto} alt={'product-canvas-photo'} />
          </StyledMiddleImgWrapper>
        </StyledCol>
        <StyledCol md={4}>
          <StyledImgWrapper>
            <img src={MeetingPhoto} alt={'meeting-photo'} />
          </StyledImgWrapper>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol md={2}>
          <StyledImgWrapper>
            <img src={CodingPhoto} alt={'coding-photo'} />
          </StyledImgWrapper>
        </StyledCol>

        <StyledCol md={5}>
          <StyledMiddleImgWrapper>
            <img src={CelebratingPhoto} alt={'celebrating-photo'} />
          </StyledMiddleImgWrapper>
        </StyledCol>
        <StyledCol md={5}>
          <StyledImgWrapper>
            <img
              src={WritingWallPostitPhoto}
              alt={'writing-wall-postit-photo'}
            />
          </StyledImgWrapper>
        </StyledCol>
      </StyledRow>
    </>
  );
};

export default AboutUs;
