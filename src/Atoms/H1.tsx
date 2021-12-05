/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

const h1Css = css`
  font-size: 25px;
  font-weight: bold;
`;

interface Props {
  text: string;
  styles?: SerializedStyles;
}

function H1(props: Props) {
  return <h1 css={[h1Css, props.styles]}>{props.text}</h1>;
}

export default H1;
