/** @jsxImportSource @emotion/react */
import { css, Global, Theme, ThemeProvider } from "@emotion/react";
import { Fragment } from "react";
import HomePage from "./Pages/HomePage";
import GlobalCss from "./styles/GlobalCss";
import { darkTheme } from "./styles/themes";

const appCss = (theme: Theme) => css`
  background-color: ${theme.background};
  color: ${theme.text};
  min-height: 100vh;
`;

function App() {
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
