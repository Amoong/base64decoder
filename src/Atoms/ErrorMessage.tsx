/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

interface Props {
  text: string;
  styles?: SerializedStyles;
}

const errorMessageCss = css`
  color: rgb(231, 86, 115);
`;

function ErrorMessage(props: Props) {
  return <p css={[errorMessageCss, props.styles]}>🤷‍♀️ {props.text}</p>;
}

export default ErrorMessage;
