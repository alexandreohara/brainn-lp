import React from 'react';
import styled from 'styled-components';

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

const AboutUs = () => {
  return (
    <StyledHeader>
      <StyledHeaderTitle>Meet brainn.co</StyledHeaderTitle>
      <StyledHeaderText>
        We want to break the &quot;let it brake&quot; software culture. We see
        no more business or technical reasons for skipping the good practices of
        the clean and maintainable code base, scalable architecture, decoupled
        teams strategies, and authentic agile practices. Partnering with true
        digital innovators, both startups and enterprises, we apply modern
        technologies, new concepts, and frameworks to solve real-world problems
        in fast-paced environments.
      </StyledHeaderText>
    </StyledHeader>
  );
};

export default AboutUs;
