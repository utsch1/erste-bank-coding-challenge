/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { blue, darkBlue, gray, white } from '../Global';
import sicherheitsCenter from '../Images/sicherheits-center-footer.png';
import ssl from '../Images/ssl.png';

const footerWrapper = css`
  width: 100vw;
  height: auto;
  background-color: ${gray};
  color: ${white};
  padding-bottom: 15px;
`;

const buttonsWrapper = css`
  display: flex;
  justify-content: flex-end;
`;

const buttons = css`
  background-color: transparent;
  color: white;
  border: 1px solid ${white};
  border-radius: 6px;
  padding: 8px 17px;
  margin: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  gap: 6px;

  :hover {
    opacity: 0.5;
  }
`;

const footerContent = css`
  height: 350px;
  margin: 50px 150px 0 150px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const footerContentSections = css`
  min-width: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  padding: 0 15px;
  margin-bottom: 30px;

  h3 {
    font-size: 1rem;
    margin: 0;
  }
  a {
    font-size: 0.875rem;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
  }
`;

const imageSecurity = css`
  width: 120px;
  height: auto;
  margin-bottom: 12px;
`;

const textSizeSpan = css`
  div {
    display: inline-block;
    padding: 3px 12px;
    margin-right: 6px;
    border: 1px solid ${white};
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 2;

    :hover {
      opacity: 0.5;
    }
  }
`;

const footerBar = css`
  width: calc(100vw - 30px);
  height: 130px;
  background-color: ${blue};
  border-radius: 6px;
  margin: 15px;
  color: ${darkBlue};
`;

export function Footer() {
  return (
    <div css={footerWrapper}>
      <div css={buttonsWrapper}>
        <a css={buttons}>
          <FontAwesomeIcon icon={faArrowUp} />
          Zum Anfang
        </a>
      </div>
      <div css={footerContent}>
        <div css={footerContentSections}>
          <h3>Erste Bank</h3>
          <a>Wir über uns</a>
          <a>Filialen & Öffnungszeiten</a>
          <a>Erreichbarkeit</a>
          <a>Ombudsstelle</a>
          <a>Whistleblowing</a>
          <a>Sponsoring</a>
          <a>Sparkassenverband</a>
          <a>Stiftungen</a>
        </div>
        <div css={footerContentSections}>
          <h3>Presse</h3>
          <a>Pressemitteilungen</a>
          <a>Medienkontakte</a>
        </div>
        <div css={footerContentSections}>
          <h3>Karriere</h3>
          <a>Übersicht</a>
          <a>Stellenangebote</a>
        </div>
        <div css={footerContentSections}>
          <h3>Rechtliches</h3>
          <a>Im Überblick</a>
          <a>AGB</a>
          <a>Datenschutz / Sicherheit</a>
          <a>Infos über Wohnimmobilienkredite</a>
          <a>Infos für Anleger</a>
          <a>Basisinformationsblätter (KIDs)</a>
          <a>Open Banking</a>
        </div>
        <div css={footerContentSections}>
          <h3>Sicherheit</h3>
          <img src={ssl} alt="ssl secure connection icon" css={imageSecurity} />
          <img
            src={sicherheitsCenter}
            alt="Sicherheits Center ausgeschrieben in grau"
            css={imageSecurity}
          />
        </div>
        <div css={footerContentSections}>
          <h3>Textgröße</h3>
          <span css={textSizeSpan}>
            <div>A</div>
            <div>A+</div>
            <div>A++</div>
          </span>
        </div>
      </div>
      <div css={footerBar}>hi</div>
    </div>
  );
}
