/** @jsxImportSource @emotion/react */
import { css, Theme, SerializedStyles } from "@emotion/react";
import React from "react";

const inputCss = (props?: Object) => (theme: Theme) =>
  css`
    width: 100%;
    min-height: 38px;
    border-radius: 3px;
    border: none;
    padding: 0 10px;
    border: 1px solid ${theme.text};
    font-size: 13px;

    &:focus-visible {
      outline: unset;
      border: 1px solid ${theme.highlight};
      background-color: ${theme.boxBackgroundHighlight};
    }
  `;

interface Props {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  className?: string;
  styles?: SerializedStyles;
}

function Input(props: Props) {
  const onClick = (e: React.MouseEvent<HTMLInputElement>) => e.currentTarget.select();

  return (
    <input
      className={props.className}
      value={props.value}
      onClick={onClick}
      onChange={props.onChange}
      css={[inputCss, props.styles]}
      type="text"
    />
  );
}

export default Input;
