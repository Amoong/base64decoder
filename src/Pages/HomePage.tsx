/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InputAndResult from "../Organisms/base64AutoDecoder";

const homePageCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15vh;
`;

function HomePage() {
  return (
    <div css={homePageCss}>
      <InputAndResult />
    </div>
  );
}

export default HomePage;
