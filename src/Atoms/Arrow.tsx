/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/utils";

interface Props {
  color: string;
  degree?: number;
  styles?: SerializedStyles;
}

function Arrow(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={props.color}
      style={{ transform: `rotate(${props.degree || 0}deg)` }}
      css={props.styles}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12.068.016l-3.717 3.698 5.263 5.286h-13.614v6h13.614l-5.295 5.317 3.718 3.699 11.963-12.016z"></path>
    </svg>
  );
}

export default Arrow;
