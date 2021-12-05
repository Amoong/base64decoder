/** @jsxImportSource @emotion/react */
import { css, SerializedStyles, Theme } from "@emotion/react";

interface Props {
  text: string;
  styles?: SerializedStyles;
}

const alertMessageCss = (theme: Theme) => css`
  color: ${theme.highlight};
`;

function AlertMessage(props: Props) {
  return <p css={[alertMessageCss, props.styles]}>{props.text}</p>;
}

export default AlertMessage;
