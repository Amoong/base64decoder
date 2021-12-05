/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/utils";

interface Props {
  styles?: SerializedStyles;
}

function CopyIcon(props: Props) {
  return (
    <svg
      css={props.styles}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z" />
    </svg>
  );
}

export default CopyIcon;
