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
import ThiagoSantos from 'assets/images/ThiagoSantos.png';
import Working from 'assets/images/Working.png';
import VectorRight from 'assets/icons/VectorRight.svg';
import { Col, Row } from 'react-flexbox-grid';
import { Colors, Gradients } from 'consts/colors';
import { Footer } from 'components/Footer';

const StyledHeader = styled.div`
  padding: 80px 288px 37px;
  text-align: center;

  @media (max-width: 1209px) {
    padding: 80px 200px 37px;
  }

  @media (max-width: 950px) {
    padding: 80px 100px 37px;
  }

  @media (max-width: 767px) {
    padding: 80px 16px 37px;
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
  display: flex;
`;

const StyledBoardPostitPhoto = styled.div`
  text-align: center;
  flex: 1.5941;
  margin-right: 8px;

  @media (max-width: 898px) {
    display: none;
  }
`;

const StyledProductCanvasPhoto = styled.div`
  flex: 1;

  @media (max-width: 898px) {
    display: none;
  }
`;

const StyledMeetingPhoto = styled.div`
  flex: 1.5941;
  margin-left: 8px;

  @media (max-width: 1439px) {
    display: none;
  }
`;

const StyledCodingPhoto = styled.div`
  text-align: center;
  flex: 1.0119;
  margin-right: 8px;

  @media (max-width: 898px) {
    display: none;
  }
`;

const StyledCelebratingPhoto = styled.div`
  flex: 1.5941;
  margin-right: 8px;

  @media (max-width: 1439px) {
    display: none;
  }
`;

const StyledWritingWallPostitPhoto = styled.div`
  flex: 1.5941;

  @media (max-width: 898px) {
    display: none;
  }
`;

const StyledProductCanvasZoomed = styled.img`
  display: none;
  width: 100%;
  margin-bottom: 8px;

  @media (max-width: 898px) {
    display: inline;
    overflow: hidden;
  }
`;

const StyledWritingWallPostitZoomed = styled.img`
  display: none;
  width: 100%;

  @media (max-width: 898px) {
    display: inline;
    overflow: hidden;
  }
`;

const StyledContent = styled.div`
  margin: 80px auto;
  max-width: 1600px;

  @media (max-width: 1700px) {
    margin: 80px 64px;
  }

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

  @media (max-width: 767px) {
    margin-right: 0;
    font-size: 24px;
  }
`;

const StyledCardWrapper = styled.div.attrs((props: any) => ({
  justifyContent: props.justifyContent,
}))`
  display: flex;
  justify-content: ${(props) => props.justifyContent ?? 'flex-end'};
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

const StyledLargePhotoWrapper = styled.div`
  text-align: center;
  overflow: hidden;
  max-height: 700px;
`;

const StyledLargePhoto = styled.img`
  width: 100%;
`;

const StyledFooterWrapper = styled.div`
  background-color: #072337;
`;

const StyledButton = styled.div`
  background: ${Gradients.blue};
  margin: 20px 64px 64px;
  padding: 48px;
  border-radius: 16px;
  text-align: center;
  color: ${Colors.white};
  cursor: pointer;

  @media (max-width: 767px) {
    padding: 22px;
    margin: 20px 16px;
  }
`;

const StyledButtonTitle = styled.div`
  font-size: 80px;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const StyledButtonSubTitle = styled.div`
  font-size: 36px;
  @media (max-width: 767px) {
    font-size: 24px;
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

const jobOpeningUrl = ' https://apply.workable.com/brainn/';

const AboutUs = () => {
  const handleClick = () => window.open(jobOpeningUrl, '_blank');

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
          <img src={BoardPostitPhoto} alt={'board-postit'} width={'100%'} />
        </StyledBoardPostitPhoto>
        <StyledProductCanvasPhoto>
          <img src={ProductCanvasPhoto} alt={'product-canvas'} width={'100%'} />
        </StyledProductCanvasPhoto>
        <StyledProductCanvasZoomed
          src={ProductCanvasZoomed}
          alt={'product-canvas-zoomed'}
        />
        <StyledMeetingPhoto>
          <img src={MeetingPhoto} alt={'meeting'} width={'100%'} />
        </StyledMeetingPhoto>
      </StyledPhotosRow>

      <StyledPhotosRow>
        <StyledCodingPhoto>
          <img src={CodingPhoto} alt={'coding'} width={'100%'} />
        </StyledCodingPhoto>
        <StyledCelebratingPhoto>
          <img src={CelebratingPhoto} alt={'celebrating'} width={'100%'} />
        </StyledCelebratingPhoto>
        <StyledWritingWallPostitPhoto>
          <img
            src={WritingWallPostitPhoto}
            alt={'writing-wall-postit'}
            width={'100%'}
          />
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
              <StyledCard>Card</StyledCard>
            </StyledCardWrapper>
          </Col>
        </Row>
      </StyledContent>

      <StyledLargePhotoWrapper>
        <StyledLargePhoto src={ThiagoSantos} />
      </StyledLargePhotoWrapper>

      <StyledContent>
        <Row center={'xs'} start={'md'}>
          <Col md={6} className={'hidden-xs hidden-sm'}>
            <StyledCardWrapper justifyContent={'flex-start'}>
              <StyledCard>Card</StyledCard>
            </StyledCardWrapper>
          </Col>
          <Col sm={12} md={6}>
            <StyledContentTitle>Teamwork</StyledContentTitle>
            <StyledContentText>
              When we think of our mission - help innovators bring their ideas
              to life - we always remember that we need great people working
              together towards a common goal. We see the journey to accomplish
              ambitious goals as important as the results itself.
            </StyledContentText>
          </Col>
        </Row>
      </StyledContent>

      <StyledLargePhotoWrapper>
        <StyledLargePhoto src={Working} />
      </StyledLargePhotoWrapper>

      <StyledContent>
        <Row center={'xs'} start={'md'}>
          <Col sm={12} md={6}>
            <StyledContentTitle>Learning</StyledContentTitle>
            <StyledContentText>
              Our job has a high level of uncertainty and complexity, usually
              combining expertise from people from different backgrounds,
              requiring a lot of experience to get the right job done most
              effectively. Our knowledge is always expired by default because of
              the fast-paced innovation happening around the globe. That&apos;s
              why we need to learn. Fast.
            </StyledContentText>
          </Col>
          <Col md={6} className={'hidden-xs hidden-sm'}>
            <StyledCardWrapper>
              <StyledCard>Card</StyledCard>
            </StyledCardWrapper>
          </Col>
        </Row>
      </StyledContent>

      <StyledButton onClick={handleClick}>
        <StyledButtonTitle>Join the team</StyledButtonTitle>
        <StyledButtonSubTitle>
          We&apos;re a growing team with big ambitions.
        </StyledButtonSubTitle>
        <StyledSeeMore>
          See job openings
          <StyledVectorRight src={VectorRight} alt={'vector-right'} />
        </StyledSeeMore>
      </StyledButton>

      <StyledFooterWrapper>
        <Footer />
      </StyledFooterWrapper>
    </>
  );
};

export default AboutUs;
