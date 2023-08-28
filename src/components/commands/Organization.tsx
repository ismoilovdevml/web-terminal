import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="organization">
      <EduIntro>Open source organizations that I am active in</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "UZINFOCOM",
    desc: "Single integrator for the creation and support of public information systems | 2022 - until now",
  },
  {
    title: "Rust - O'zbek Jamiyati",
    desc: "Rust programming language community maintained by Uzbek programmers. | 2022 - until now",
  },
  {
    title: "Mad Maids",
    desc: "A community that's primarily focused on advancing the Uzbek Open Source initiative and bolstering the IT community in Uzbekistan. | 2023 - until now",
  },
];

export default Education;
