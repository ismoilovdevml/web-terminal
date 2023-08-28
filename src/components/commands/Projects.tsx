import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "ismoilovdev.uz",
    desc: "My personal blog where I can write down my thoughts and experiences.",
    url: "https://ismoilovdev.uz/",
  },
  {
    id: 2,
    title: "os-dev-blog.uz",
    desc: "This is partly my second blog. In this blog, I will write technical in-depth articles, mainly about computer science and my interests",
    url: "https://os-dev-blog.uz/",
  },
  {
    id: 3,
    title: "devops-journey.uz",
    desc: "I write about my journey in DevOps, I write technical guides and articles mainly in this educational area",
    url: "https://devops-journey.uz/",
  },
  {
    id: 4,
    title: "cs.uz",
    desc: "Computer Science is a free learning platform",
    url: "https://cs-uz.vercel.app/",
  },
];

export default Projects;
