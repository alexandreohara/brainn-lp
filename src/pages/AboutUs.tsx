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
import { JOB_OPENING_URL } from 'consts/links';
import { AboutUsSlider } from 'components/AboutUsSlider';
import DetailOriented from 'assets/icons/DetailOriented.svg';
import ChallengeLovers from 'assets/icons/ChallengeLovers.svg';
import NotHierarchical from 'assets/icons/NotHierarchical.svg';
import TeamThing from 'assets/icons/TeamThing.svg';
import PeopleOriented from 'assets/icons/PeopleOriented.svg';
import Transparent from 'assets/icons/Transparent.svg';
import Methodical from 'assets/icons/Methodical.svg';
import ToShare from 'assets/icons/ToShare.svg';
import EarlyAdopters from 'assets/icons/EarlyAdopters.svg';

const StyledHeader = styled.div`
  padding: 80px 288px 37px;
  text-align: center;

  @media (max-width: 1209px) {
    padding: 80px 200px 37px;
  }

  @media (max-width: 991px) {
    padding: 80px 16px 37px;
  }
`;

const StyledHeaderTitle = styled.div`
  font-size: 88px;
  font-weight: bold;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const StyledHeaderText = styled.div`
  font-size: 36px;
  padding-top: 32px;

  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

const StyledPhotosRow = styled.div`
  text-align: center;
  display: flex;
  margin: 0;
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
  margin: 80px 64px;

  @media (max-width: 991px) {
    margin: 40px 16px;
  }
`;

const StyledContentTitle = styled.div`
  font-size: 88px;
  font-weight: bold;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const StyledContentText = styled.div`
  font-size: 32px;
  margin-top: 24px;

  @media (max-width: 991px) {
    margin-right: 0;
    font-size: 24px;
  }
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

  @media (max-width: 991px) {
    padding: 22px;
    margin: 20px 16px;
  }
`;

const StyledButtonTitle = styled.div`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 991px) {
    font-size: 30px;
  }
`;

const StyledButtonSubTitle = styled.div`
  font-size: 36px;

  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

const StyledSeeMore = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-top: 32px;

  @media (max-width: 991px) {
    font-size: 18px;
  }
`;

const StyledVectorRight = styled.img`
  width: 12px;
  margin-left: 12px;

  @media (max-width: 991px) {
    width: 8px;
  }
`;

const StyledRow = styled(Row)`
  margin: 0;
`;

const StyledRightCardCol = styled(Col)`
  padding-left: 50px;
`;

const StyledLeftCardCol = styled(Col)`
  padding-right: 50px;
`;

const AboutUs = () => {
  const handleClick = () => window.open(JOB_OPENING_URL, '_blank');

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
        <StyledRow center={'xs'} start={'lg'}>
          <Col md={12} lg={6}>
            <StyledContentTitle>Excellence</StyledContentTitle>
            <StyledContentText>
              We aim high, and we want to evolve every day, so it is mandatory
              to learn continuously and try new innovative ideas with strong
              discipline. We value those who give their best in their jobs and
              genuinely love what they do. When you love what you do, you excel.
            </StyledContentText>
          </Col>
          <StyledRightCardCol
            lg={6}
            className={'hidden-xs hidden-sm hidden-md'}
          >
            <AboutUsSlider cardList={ABOUT_US_CARDS_1}></AboutUsSlider>
          </StyledRightCardCol>
        </StyledRow>
      </StyledContent>

      <StyledLargePhotoWrapper>
        <StyledLargePhoto src={ThiagoSantos} />
      </StyledLargePhotoWrapper>

      <StyledContent>
        <StyledRow center={'xs'} start={'lg'}>
          <StyledLeftCardCol lg={6} className={'hidden-xs hidden-sm hidden-md'}>
            <AboutUsSlider cardList={ABOUT_US_CARDS_2}></AboutUsSlider>
          </StyledLeftCardCol>
          <Col md={12} lg={6}>
            <StyledContentTitle>Teamwork</StyledContentTitle>
            <StyledContentText>
              When we think of our mission - help innovators bring their ideas
              to life - we always remember that we need great people working
              together towards a common goal. We see the journey to accomplish
              ambitious goals as important as the results itself.
            </StyledContentText>
          </Col>
        </StyledRow>
      </StyledContent>

      <StyledLargePhotoWrapper>
        <StyledLargePhoto src={Working} />
      </StyledLargePhotoWrapper>

      <StyledContent>
        <StyledRow center={'xs'} start={'lg'}>
          <Col md={12} lg={6}>
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
          <StyledRightCardCol
            lg={6}
            className={'hidden-xs hidden-sm hidden-md'}
          >
            <AboutUsSlider cardList={ABOUT_US_CARDS_3}></AboutUsSlider>
          </StyledRightCardCol>
        </StyledRow>
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

const ABOUT_US_CARDS_1 = [
  {
    colouredTitle: 'We are',
    title: 'detail oriented.',
    paragraph:
      'When there are two options for accomplishing something, one satisfying and another exceptional, we will choose the latter, even if it means working harder than expected.',
    color: Colors.lightBlue,
    icon: DetailOriented,
  },
  {
    colouredTitle: 'We are',
    title: 'challenge lovers.',
    paragraph:
      'If our team believes and holds a goal that we need to reach a particular stage of a project, we will do our best to achieve it, rather than making excuses.',
    color: Colors.yellow,
    icon: ChallengeLovers,
  },
  {
    colouredTitle: 'We are',
    title: 'not hierarchical.',
    paragraph:
      "We will be proactive, and you will not wait for someone else to solve a problem, as we are all responsible for the pursuit of excellence. That's why everyone in our team should have an opinion.",
    color: Colors.purple,
    icon: NotHierarchical,
  },
];

const ABOUT_US_CARDS_2 = [
  {
    colouredTitle: 'We love',
    title: 'the team thing.',
    paragraph:
      'We value gathering as a team, including our clients and users. We are constantly seeking feedback and evolving. So, we come to team gatherings eager to share and contribute to others.',
    color: Colors.pink,
    icon: TeamThing,
  },
  {
    colouredTitle: 'We are',
    title: 'people-oriented.',
    paragraph:
      'We are respectful and empathetic to each other. We love that “team thing” and diversity. Maybe we are not always extroverted, but we just like people by heart. Doing great work together is better than a one-person show.',
    color: Colors.green,
    icon: PeopleOriented,
  },
  {
    colouredTitle: 'We are',
    title: 'transparent.',
    paragraph:
      "We don't like any sort of hidden agenda. We prefer to be authentic, pragmatic, honest, and share our thoughts upfront, avoiding creating any misalignment among our peers.",
    color: Colors.lightBlue,
    icon: Transparent,
  },
];

const ABOUT_US_CARDS_3 = [
  {
    colouredTitle: 'We love',
    title: 'methodical.',
    paragraph:
      'We always search for the best method to do things. Questioning if we are doing our jobs in the most effective process is natural, and feedback is interpreted as natural shortcuts for improvement.',
    color: Colors.green,
    icon: Methodical,
  },
  {
    colouredTitle: 'We love',
    title: 'to share.',
    paragraph:
      'We contribute proactively to the company and our peers. Whether sharing knowledge internally or externally, we see the value of teaching others as the best learning tool we could have.',
    color: Colors.lightBlue,
    icon: ToShare,
  },
  {
    colouredTitle: 'We are',
    title: 'the early adopters.',
    paragraph:
      'When we are not learning something new, we get bored. We ask for new challenges and try to explore new stuff all the time. We are committed to bringing new ideas to our work every day.',
    color: Colors.yellow,
    icon: EarlyAdopters,
  },
];
