/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { white } from '../Global';
import george from '../Images/george.webp';

const goodbyeWrapper = css`
  height: 80vh;
  width: 100vw;
`;

const goodbyeImage = css`
  height: 80vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${george});
  object-fit: cover;
  z-index: -1;
`;

const gradientOverlay = css`
  width: 100vw;
  height: 80vh;
  background-color: #000;
  opacity: 0.5;
  position: absolute;
`;

const goodbyeTextWrapper = css`
  width: 100vw;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: absolute;
`;

const goodbye = css`
  color: ${white};
  text-align: center;
  margin-top: 250px;
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
  text-decoration: none;
  color: white;
  border: 1px solid ${white};
  border-radius: 6px;
  padding: 8px 17px;
  margin: 6px 0;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  :hover {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
`;

export function LogoutSuccess() {
  return (
    <div css={goodbyeWrapper}>
      <div css={goodbyeImage} />
      <div css={gradientOverlay} />
      <div css={goodbyeTextWrapper}>
        <h1 css={goodbye}>
          Auf Wiedersehen, <br /> bis zum nächsten Mal.
        </h1>
        <div css={buttonsWrapper}>
          <a href="https://george.sparkasse.at/" css={buttons}>
            Zurück zu George
          </a>
          <a
            href="https://www.sparkasse.at/erstebank/privatkunden"
            css={buttons}
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}
