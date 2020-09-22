import React from 'react';
import styled from 'styled-components';
import BoardPostitPhoto from 'assets/images/BoardPostitPhoto.png';
import CelebratingPhoto from 'assets/images/CelebratingPhoto.png';
import CodingPhoto from 'assets/images/CodingPhoto.png';
import MeetingPhoto from 'assets/images/MeetingPhoto.png';
import ProductCanvasPhoto from 'assets/images/ProductCanvasPhoto.png';
import ProductCanvasZoomed from 'assets/images/ProductCanvasZoomed.png';
import WritingWallPostitPhoto from 'assets/images/WritingWallPostitPhoto.png';
import WritingWallPostitZoomed from 'assets/images/WritingWallPostitZoomed.png';
import { Col, Row } from 'react-flexbox-grid';

const StyledHeader = styled.div`
  margin: 80px 288px 37px;
  text-align: center;

  @media (max-width: 1209px) {
    margin: 80px 200px 37px;
  }

  @media (max-width: 950px) {
    margin: 80px 100px 37px;
  }

  @media (max-width: 767px) {
    margin: 80px 16px 37px;
  }
`;

const StyledHeaderTitle = styled.div`
  font-size: 88px;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 40px;
  }
`;

const StyledHeaderText = styled.div`
  font-size: 36px;
  padding-top: 32px;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const StyledPhotosRow = styled.div`
  text-align: center;
`;

const StyledBoardPostitPhoto = styled.div`
  text-align: center;
  display: inline-block;
  margin-right: 8px;

  @media (max-width: 898px) {
    display: none;
  }
`;

const StyledProductCanvasPhoto = styled.div`
  display: inline-block;

  @media (max-width: 898px) {
    display: none;
  }
`;

const StyledMeetingPhoto = styled.div`
  display: inline-block;
  margin-left: 8px;

  @media (max-width: 1439px) {
    display: none;
  }
`;

const StyledCodingPhoto = styled.div`
  text-align: center;
  display: inline-block;
  margin-right: 8px;

  @media (max-width: 898px) {
    display: none;
  }
`;

const StyledCelebratingPhoto = styled.div`
  display: inline-block;
  margin-right: 8px;

  @media (max-width: 1439px) {
    display: none;
  }
`;

const StyledWritingWallPostitPhoto = styled.div`
  display: inline-block;

  @media (max-width: 898px) {
    display: none;
  }
`;

const StyledProductCanvasZoomed = styled.img`
  display: none;
  max-width: 419px;
  width: 100%;

  @media (max-width: 898px) {
    display: inline;
    overflow: hidden;
  }
`;

const StyledWritingWallPostitZoomed = styled.img`
  display: none;
  max-width: 419px;
  width: 100%;

  @media (max-width: 898px) {
    display: inline;
    overflow: hidden;
  }
`;

const StyledContent = styled.div`
  margin: 80px 64px;

  @media (max-width: 898px) {
    margin: 40px 16px;
  }
`;

const StyledContentTitle = styled.div`
  font-size: 88px;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 40px;
  }
`;

const StyledContentText = styled.div`
  font-size: 32px;
  margin-top: 24px;
  margin-right: 100px;

  @media (max-width: 767px) {
    margin-right: 0;
    font-size: 24px;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled.div`
  border-radius: 8px;
  margin-top: 136px;
  background-color: blue;
  font-size: 88px;
  height: 274px;
  width: 560px;
  text-align: center;
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

      <StyledPhotosRow>
        <StyledBoardPostitPhoto>
          <img src={BoardPostitPhoto} alt={'board-postit-photo'} />
        </StyledBoardPostitPhoto>
        <StyledProductCanvasPhoto>
          <img src={ProductCanvasPhoto} alt={'product-canvas-photo'} />
        </StyledProductCanvasPhoto>
        <StyledProductCanvasZoomed
          src={ProductCanvasZoomed}
          alt={'product-canvas-zoomed'}
        />
        <StyledMeetingPhoto>
          <img src={MeetingPhoto} alt={'meeting-photo'} />
        </StyledMeetingPhoto>
      </StyledPhotosRow>

      <StyledPhotosRow>
        <StyledCodingPhoto>
          <img src={CodingPhoto} alt={'coding-photo'} />
        </StyledCodingPhoto>
        <StyledCelebratingPhoto>
          <img src={CelebratingPhoto} alt={'celebrating-photo'} />
        </StyledCelebratingPhoto>
        <StyledWritingWallPostitPhoto>
          <img src={WritingWallPostitPhoto} alt={'writing-wall-postit-photo'} />
        </StyledWritingWallPostitPhoto>
        <StyledWritingWallPostitZoomed
          src={WritingWallPostitZoomed}
          alt={'writing-wall-postit-zoomed'}
        />
      </StyledPhotosRow>

      <StyledContent>
        <Row center={'xs'} start={'md'}>
          <Col sm={12} md={6}>
            <StyledContentTitle>Excellence</StyledContentTitle>
            <StyledContentText>
              We aim high, and we want to evolve every day, so it is mandatory
              to learn continuously and try new innovative ideas with strong
              discipline. We value those who give their best in their jobs and
              genuinely love what they do. When you love what you do, you excel.
            </StyledContentText>
          </Col>
          <Col md={6} className={'hidden-xs hidden-sm'}>
            <StyledCardWrapper>
              <StyledCard>Potato</StyledCard>
            </StyledCardWrapper>
          </Col>
        </Row>
      </StyledContent>
    </>
  );
};

export default AboutUs;
