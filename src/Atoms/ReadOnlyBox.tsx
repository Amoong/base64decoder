/** @jsxImportSource @emotion/react */
import { css, Theme, SerializedStyles } from "@emotion/react";

const readOnlyBoxCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 38px;
  padding: 0 10px;
  border-radius: 3px;
  background-color: ${theme.boxBackground};
  color: ${theme.boxText};
  font-size: 13px;
`;

interface Props {
  text: string;
  styles?: SerializedStyles;
}

function ReadOnlyBox(props: Props) {
  return <div css={[readOnlyBoxCss, props.styles]}>{props.text}</div>;
}

export default ReadOnlyBox;
