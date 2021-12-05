/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import InputAndResult from "../Organisms/base64AutoDecoder";

const homePageCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15vh;
`;

function HomePage() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/" });
  });

  return (
    <div css={homePageCss}>
      <InputAndResult />
    </div>
  );
}

export default HomePage;
