/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray } from '../Global';

const footerWrapper = css`
  width: 100vw;
  height: auto;
  background-color: ${gray};
`;

export function Footer() {
  return <div css={footerWrapper}>hi</div>;
}
