/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { darkBlue } from '../Global';

const floatingNavWrapper = css`
  width: 68px;
  height: 727px;
  background-color: ${darkBlue};
  border-radius: 6px;
  position: absolute;
  position: sticky;
`;

export function FloatingNav() {
  return (
    <div css={floatingNavWrapper}>
      <div>Filiale suchen</div>
      <div>Termin vereinbaren</div>
      <div>Hilfe im Notfall</div>
      <div>Cookies einstellen</div>
    </div>
  );
}
