/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { white } from '../Global';
import george from '../Images/george.webp';

const image = css`
  height: 80%;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`;

const goodbye = css`
  display: flex;
  width: fit-content;
  margin: 90px auto 20px auto;
  color: ${white};
  text-align: center;
`;

const buttonsWrapper = css`
  width: fit-content;
  gap: 2rem;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const buttons = css`
  background-color: transparent;
  color: white;
  border: 1px solid ${white};
  border-radius: 6px;
  padding: 8px 17px;
  margin: 6px 0;
  font-size: 1rem;
  font-weight: 600;

  :hover {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
`;

export function LogoutSuccess() {
  return (
    <div>
      <img
        src={george}
        alt="online banking screen with George Logo in blue"
        css={image}
      />
      <h1 css={goodbye}>
        Auf Wiedersehen, <br /> bis zum nächsten Mal.
      </h1>
      <div css={buttonsWrapper}>
        <button css={buttons}>Zurück zu George</button>
        <button css={buttons}>Zur Startseite</button>
      </div>
    </div>
  );
}
