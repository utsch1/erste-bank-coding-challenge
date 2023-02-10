/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { darkOrange, orange, white } from '../Global';
import contact from '../Images/kontakt.webp';

const contactWrapper = css`
  width: 100vw;
  height: 60vh;
`;

const image = css`
  width: 100vw;
  height: 60vh;
  object-fit: cover;
  object-position: 0 20%;
  position: absolute;
`;

const gradientOverlay = css`
  width: 100vw;
  height: 60vh;
  background-color: #000;
  opacity: 0.3;
  position: absolute;
`;

const textWrapper = css`
  color: ${white};
  opacity: 1;
  position: absolute;
  margin: 90px 168px 50px 168px;

  h2 {
    font-size: 2rem;
  }

  p {
    margin-top: 36px;
    margin-bottom: 60px;
  }

  a {
    padding: 8px 17px;
    background-color: ${orange};
    border: 1px solid ${orange};
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;

    :hover {
      background-color: ${darkOrange};
      border: 1px solid ${darkOrange};
    }
  }
`;

export function Contact() {
  return (
    <div css={contactWrapper}>
      <img src={contact} alt="man looking at you" css={image} />
      <div css={gradientOverlay} />
      <div css={textWrapper}>
        <h2>Haben Sie Fragen?</h2>
        <p>Wir beraten Sie gern - einfach Gesprächstermin vereinbaren.</p>
        <a>Termin vereinbaren</a>
      </div>
    </div>
  );
}
