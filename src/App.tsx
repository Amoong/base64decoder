/** @jsxImportSource @emotion/react */
import { css, Global, Theme, ThemeProvider } from "@emotion/react";
import { Fragment, useEffect } from "react";
import ReactGA from "react-ga";

import HomePage from "./Pages/HomePage";
import GlobalCss from "./styles/GlobalCss";
import { darkTheme } from "./styles/themes";

const appCss = (theme: Theme) => css`
  background-color: ${theme.background};
  color: ${theme.text};
  min-height: 100vh;
`;

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-154574834-2");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <Global styles={GlobalCss} />
        <div css={appCss}>
          <HomePage />
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
