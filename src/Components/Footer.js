/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
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

const footerContent = css`
  height: 350px;
  margin: 50px 100px 0 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const footerContentSections = css`
  height: auto;
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  padding: 0 15px;
  margin-bottom: 30px;

  h3 {
    font-size: 1rem;
  }
  a {
    font-size: 0.875rem;
  }
`;

const imageSecurity = css`
  width: 120px;
  height: auto;
`;

const textSizeSpan = css`
  box-sizing: content-box;

  div {
    padding: 0.5px 4px;
    border: 1px solid ${white};
    border-radius: 6px;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
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
      <button>Zum Anfang</button>
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
