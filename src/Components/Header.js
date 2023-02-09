/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { blue, darkBlue, lightBlue, white } from '../Global';
import logo from '../Images/logo.svg';

const navBar = css`
  width: calc(100vw - 30px);
  height: 130px;
  background-color: ${blue};
  border-radius: 6px;
  margin: 15px 15px 0 15px;
  color: ${darkBlue};
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
`;

const search = css`
  font-weight: 600;
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
`;

const login = css`
  background-color: ${darkBlue};
  color: ${white};
  border-radius: 6px;
  border: 1px solid ${darkBlue};
  padding: 8px 30px 8px 17px;
  font-weight: 700;
  font-size: 1rem;
`;

export function Header() {
  return (
    <div>
      <header>
        <nav css={navBar}>
          <div css={firstRow}>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div css={firstRowWithoutLogo}>
              <div>
                <button css={clients}>
                  <span>für ...</span>
                </button>
              </div>
              <div css={firstRowLinks}>
                <a>Filiale suchen</a>
                <a>Karriere</a>
                <a>Sparkasse wählen</a>
                <a>English</a>
              </div>
              <div css={search}>Suche</div>
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
              <button css={login}>Login</button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
