/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  blue,
  blueOpacity,
  darkBlue,
  lightBlue,
  mediumBlue,
  white,
} from '../Global';
import hilfe from '../Images/achtungIcon.svg';
import termin from '../Images/chatIcon.svg';
import cookie from '../Images/fingerabdruckIcon.svg';
import filiale from '../Images/karteIcon.svg';
import logo from '../Images/logo.svg';

const navBar = css`
  position: absolute;
  width: calc(100vw - 30px);
  height: 130px;
  background-color: ${blueOpacity};
  border-radius: 6px;
  margin: 15px 15px 0 15px;
  color: ${darkBlue};
  z-index: 99;

  :hover {
    background-color: ${blue};
  }
`;

const firstRow = css`
  padding: 20px 15px 24px 15px;
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
`;

const clients = css`
  width: 200px;
  height: 41px;
  background-color: ${lightBlue};
  color: ${darkBlue};
  border-radius: 6px;
  border: 1px solid ${lightBlue};
  padding: 0 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const firstRowWithoutLogo = css`
  display: grid;
  grid-template-columns: 1fr max-content max-content;
  width: 100%;
  column-gap: 5.4rem;
  justify-items: start;
  padding-left: 70px;
`;

const firstRowLinks = css`
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  a {
    cursor: pointer;

    :hover {
      color: ${mediumBlue};
    }
  }
`;

const search = css`
  font-weight: 600;
  display: flex;
  gap: 6px;
  cursor: pointer;
`;

const secondRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 15px;
`;

const secondRowLinks = css`
  display: flex;
  gap: 2rem;
  font-weight: 600;

  a {
    cursor: pointer;

    :hover {
      color: ${mediumBlue};
    }
  }
`;

const login = css`
  background-color: ${darkBlue};
  color: ${white};
  border-radius: 6px;
  border: 1px solid ${darkBlue};
  padding: 8px 17px 8px 17px;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  gap: 6px;
  cursor: pointer;

  :hover {
    background-color: #003a62;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
`;

const floatingNavWrapper = css`
  width: 68px;
  height: auto;
  background-color: ${darkBlue};
  color: ${white};
  border-radius: 6px;
  position: absolute;
  right: 30px;
  top: 25%;
  position: fixed;
  z-index: 98;
  font-size: 0.6rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;

    :hover {
      background-color: #003a62;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }
  }

  div:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  div:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  div:not(:last-child) {
    border-bottom: 1px solid rgb(255, 255, 255, 0.3);
  }

  div > img {
    height: 25px;
    width: auto;
    align-self: center;
    justify-self: center;
    margin: 6px 6px 0 6px;
  }

  div > div {
    margin: 3px 6px 6px 6px;
    text-align: center;
  }
`;

export function Header() {
  return (
    <div>
      <header>
        <nav css={navBar}>
          <div css={firstRow}>
            <div>
              <a href="https://www.sparkasse.at/erstebank/privatkunden">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div css={firstRowWithoutLogo}>
              <div>
                <a css={clients}>
                  für ...
                  <FontAwesomeIcon icon={faChevronDown} />
                </a>
              </div>
              <div css={firstRowLinks}>
                <a>Filiale suchen</a>
                <a>Karriere</a>
                <a>Sparkasse wählen</a>
                <a>English</a>
              </div>
              <div css={search}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                Suche
              </div>
            </div>
          </div>
          <div css={secondRow}>
            <div css={secondRowLinks}>
              <a>Internetbanking</a>
              <a>Konto & Karten</a>
              <a>Sparen & Anlegen</a>
              <a>Kredit & Finanzen</a>
              <a>Vorsorgen & Versichern</a>
              <a>Online eröffnen</a>
            </div>
            <div>
              <a css={login}>
                Login
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div css={floatingNavWrapper}>
        <div>
          <img src={filiale} alt="icon for map pin" />
          <div>Filiale suchen</div>
        </div>
        <div>
          <img src={termin} alt="chat icon" />
          <div>Termin vereinbaren</div>
        </div>
        <div>
          <img src={hilfe} alt="chat icon" />
          <div>Hilfe im Notfall</div>
        </div>
        <div>
          <img src={cookie} alt="chat icon" />
          <div>Cookies einstellen</div>
        </div>
      </div>
    </div>
  );
}
