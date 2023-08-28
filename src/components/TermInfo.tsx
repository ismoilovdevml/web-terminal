import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>terminal</User>@<WebsiteName>ismoilovdev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
