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

const StyledHeader = styled.div`
  margin: 80px 288px 37px;
  text-align: center;

  @media (max-width: 1209px) {
    margin: 80px 240px 37px;
  }

  @media (max-width: 898px) {
    margin: 80px 16px 37px;
  }
`;

const StyledHeaderTitle = styled.div`
  font-size: 88px;
  font-weight: bold;

  @media (max-width: 898px) {
    font-size: 40px;
  }
`;

const StyledHeaderText = styled.div`
  font-size: 36px;
  padding-top: 32px;

  @media (max-width: 898px) {
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

const StyledProductCanvasZoomed = styled.div`
  display: none;

  @media (max-width: 898px) {
    display: inline;
    overflow: hidden;
  }
`;

const StyledWritingWallPostitZoomed = styled.div`
  display: none;

  @media (max-width: 898px) {
    display: inline;
    overflow: hidden;
  }
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
        <StyledProductCanvasZoomed>
          <img
            src={ProductCanvasZoomed}
            alt={'product-canvas-zoomed'}
            width={'100%'}
          />
        </StyledProductCanvasZoomed>
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
        <StyledWritingWallPostitZoomed>
          <img
            src={WritingWallPostitZoomed}
            alt={'writing-wall-postit-zoomed'}
            width={'100%'}
          />
        </StyledWritingWallPostitZoomed>
      </StyledPhotosRow>
    </>
  );
};

export default AboutUs;
