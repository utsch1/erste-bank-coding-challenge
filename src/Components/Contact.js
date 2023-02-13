/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { blueOpacity, darkBlue, darkOrange, orange, white } from '../Global';
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

  button {
    padding: 8px 17px;
    background-color: ${orange};
    color: ${white};
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

const contactFormWrapper = css`
  position: fixed;
  width: calc(100vw - 100px);
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${blueOpacity};
  z-index: 100;
  padding: 50px;
  animation: fadeIn 0.45s ease;
`;

const contactFormIcon = css`
  background-color: transparent;
  border: 0;
  color: ${darkBlue};
  float: right;
`;

export function Contact() {
  // function to open and close contact form
  const [contactForm, setContactForm] = useState(false);
  const handleClick = () => {
    if (contactForm === false) {
      setContactForm(true);
    } else {
      setContactForm(false);
    }
  };

  return (
    <div css={contactWrapper}>
      <img src={contact} alt="man looking at you" css={image} />
      <div css={gradientOverlay} />
      <div
        css={textWrapper}
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-offset="100"
      >
        <h2>Haben Sie Fragen?</h2>
        <p>Wir beraten Sie gern - einfach Gesprächstermin vereinbaren.</p>
        <button onClick={handleClick}>Termin vereinbaren</button>
      </div>
      {contactForm && (
        <div css={contactFormWrapper} id="overlay">
          <button onClick={handleClick} css={contactFormIcon}>
            <FontAwesomeIcon icon={faTimes} size="3x" />
          </button>
        </div>
      )}
    </div>
  );
}
