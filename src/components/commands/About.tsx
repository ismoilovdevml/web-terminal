import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
      I am an open source <HighlightSpan>Software Engineer</HighlightSpan> contributing to Open Source development 
      </p>
      <p>
      I spend most of my time and energy on open source development in <HighlightSpan>Uzbekistan</HighlightSpan>
      </p>
      <p>
        I like working and learning more. <br />
        I want to study deeply and I am interested in System Engineering.
      </p>
    </AboutWrapper>
  );
};

export default About;
