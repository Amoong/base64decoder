/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";

import { openNewTab } from "utils/common";

import Arrow from "Atoms/Arrow";
import H1 from "Atoms/H1";
import Input from "Atoms/Input";
import ErrorMessage from "Atoms/ErrorMessage";
import CopyableBox from "Molecules/CopyableBox";

const base64AutoDecoderCss = css`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const marginBottom = css`
  margin-bottom: 30px;
`;

const errorMessageCss = css`
  align-self: flex-start;
  margin-top: 14px;
`;

function Base64AutoDecoder() {
  const [encodedText, setEncodedText] = useState("");
  const [decodedText, setDecodedText] = useState("");
  const [isError, setIsError] = useState(false);

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setEncodedText(value);

    try {
      const decoded = atob(value);
      setDecodedText(decoded);
      openNewTab(decoded);
      setIsError(false);
    } catch {
      setIsError(true);
      return;
    }
  };

  const inputCss = isError ? undefined : marginBottom;

  return (
    <div css={base64AutoDecoderCss}>
      <H1 text="인코딩된 문자열을 넣어주세요" styles={marginBottom} />
      <Input value={encodedText} onChange={onChangeInput} styles={inputCss} />
      {isError && <ErrorMessage text="base64 형식이 아닙니다." styles={errorMessageCss} />}
      <Arrow color="#64C3BB" degree={90} styles={marginBottom} />
      <CopyableBox text={decodedText} />
    </div>
  );
}

export default Base64AutoDecoder;
