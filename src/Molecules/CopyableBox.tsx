/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css, Theme } from "@emotion/react";

import { copyText } from "utils/common";

import CopyIcon from "Atoms/CopyIcon";
import ReadOnlyBox from "Atoms/ReadOnlyBox";
import AlertMessage from "Atoms/AlertMessage";

const BLINK_EFFECT_TIME = 0.15;
const ALERT_RENDERING_TIME = 1;

const copyableBoxContainerCss = css`
  width: 100%;
`;

const copyableBoxCss = (props: { isEffectTime: boolean; text: string }) => (theme: Theme) =>
  css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    cursor: ${props.text ? "pointer" : "not-allowed"};
    border-radius: 3px;
    transition: all ${BLINK_EFFECT_TIME}s ease-in-out;
    background-color: ${props.isEffectTime ? theme.highlight : theme.boxBackground};
    opacity: ${props.text ? 1 : 0.8};
  `;

const copyButtonCss = css`
  top: 7px;
  right: 10px;
  position: absolute;
`;

const transparentBackground = css`
  background-color: transparent;
`;

const alertMessageCss = (isShowAlert: boolean) => css`
  opacity: ${isShowAlert ? 1 : 0};
  margin-top: 10px;
  transition: all 0.2s ease-in-out;
`;

interface Props {
  text: string;
}

function CopyableBox(props: Props) {
  const [isEffectTime, setIsEffectTime] = useState(false);
  const [isShowAlert, setIsShowAlert] = useState(false);

  const blinkAlert = () => {
    setIsShowAlert(true);
    setTimeout(() => {
      setIsShowAlert(false);
    }, ALERT_RENDERING_TIME * 1000);
  };

  const blinkEffect = () => {
    setIsEffectTime(true);
    setTimeout(() => {
      setIsEffectTime(false);
    }, BLINK_EFFECT_TIME * 1000);
  };

  const onClick = () => {
    if (!props.text) {
      return;
    }

    blinkEffect();
    blinkAlert();
    copyText(props.text);
  };

  return (
    <div css={copyableBoxContainerCss}>
      <div onClick={onClick} css={copyableBoxCss({ isEffectTime, text: props.text })}>
        <ReadOnlyBox text={props.text} styles={transparentBackground} />
        <CopyIcon styles={copyButtonCss} />
      </div>
      <AlertMessage text="복사 되었습니다." styles={alertMessageCss(isShowAlert)} />
    </div>
  );
}

export default CopyableBox;
