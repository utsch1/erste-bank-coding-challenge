/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { blue, darkBlue, gray, mediumBlue, white } from '../Global';
import facebook from '../Images/facebook.svg';
import instagram from '../Images/instagram.svg';
import linkedin from '../Images/linkedin.svg';
import logo from '../Images/logo.svg';
import sicherheitsCenter from '../Images/sicherheits-center-footer.png';
import ssl from '../Images/ssl.png';
import tiktok from '../Images/tiktok.svg';
import twitter from '../Images/twitter.svg';
import xing from '../Images/xing.svg';
import youtube from '../Images/youtube.svg';

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

  div {
    font-size: 1rem;
    margin: 0;
    font-weight: 600;
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
  width: calc(100vw - 60px);
  height: auto;
  background-color: ${blue};
  border-radius: 6px;
  margin: 15px 30px;
  color: ${darkBlue};
  font-size: 0.875rem;
  padding: 0 0 24px 0;
`;

const socialMediaIcons = css`
  display: flex;
  justify-content: center;
  color: ${gray};
  gap: 2rem;
  padding: 24px 0 16px 0;
  img {
    height: 20px;
    width: auto;
    cursor: pointer;
  }
`;

const logoErsteBank = css`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

const footerInfo = css`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 15px;

  a {
    color: ${darkBlue};
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    color: ${mediumBlue};
  }
`;

const copyright = css`
  color: ${gray};
  text-align: center;
`;

export function Footer() {
  // Scroll to top function
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div css={footerWrapper}>
      <div css={buttonsWrapper}>
        <button onClick={handleScrollToTop} css={buttons}>
          <FontAwesomeIcon icon={faArrowUp} />
          Zum Anfang
        </button>
      </div>
      <div css={footerContent}>
        <div css={footerContentSections}>
          <div>Erste Bank</div>
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
          <div>Presse</div>
          <a>Pressemitteilungen</a>
          <a>Medienkontakte</a>
        </div>
        <div css={footerContentSections}>
          <div>Karriere</div>
          <a>Übersicht</a>
          <a>Stellenangebote</a>
        </div>
        <div css={footerContentSections}>
          <div>Rechtliches</div>
          <a>Im Überblick</a>
          <a>AGB</a>
          <a>Datenschutz / Sicherheit</a>
          <a>Infos über Wohnimmobilienkredite</a>
          <a>Infos für Anleger</a>
          <a>Basisinformationsblätter (KIDs)</a>
          <a>Open Banking</a>
        </div>
        <div css={footerContentSections}>
          <div>Sicherheit</div>
          <img src={ssl} alt="ssl secure connection icon" css={imageSecurity} />
          <img
            src={sicherheitsCenter}
            alt="Sicherheits Center ausgeschrieben in grau"
            css={imageSecurity}
          />
        </div>
        <div css={footerContentSections}>
          <div>Textgröße</div>
          <span css={textSizeSpan}>
            <div>A</div>
            <div>A+</div>
            <div>A++</div>
          </span>
        </div>
      </div>
      <div css={footerBar}>
        <div css={socialMediaIcons}>
          Besuchen Sie uns auf
          <img src={facebook} alt="facebook icon" />
          <img src={youtube} alt="youtube icon" />
          <img src={instagram} alt="youtube icon" />
          <img src={twitter} alt="youtube icon" />
          <img src={tiktok} alt="youtube icon" />
          <img src={linkedin} alt="youtube icon" />
          <img src={xing} alt="youtube icon" />
        </div>
        <div css={footerInfo}>
          <a href="https://www.sparkasse.at/erstebank/wir-ueber-uns/impressum">
            Impressum
          </a>
          <a href="https://www.sparkasse.at/erstebank/wir-ueber-uns/datenschutz-sicherheit">
            Datenschutz / Sicherheit
          </a>
          <a href="https://www.sparkasse.at/erstebank/wir-ueber-uns/datenschutz-sicherheit/cookies">
            Cookie-Einstellungen
          </a>
          <a href="https://www.sparkasse.at/erstebank/wir-ueber-uns/agb">
            Geschäftsbedingungen
          </a>
        </div>
        <div css={logoErsteBank}>
          <img src={logo} alt="logo" />
        </div>
        <div css={copyright}>© 2023 Erste Bank</div>
      </div>
    </div>
  );
}
