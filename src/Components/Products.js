/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray, mediumBlue } from '../Global';
import Bausparen from '../Images/bausparen.webp';
import GooglePay from '../Images/googlePay.webp';
import Kreditkarten from '../Images/kreditkarten.webp';
import Versicherung from '../Images/versicherung.webp';

const productSectionWrapper = css`
  padding: 36px 0;
  display: flex;
  justify-content: center;
`;

const productWrapper = css`
  width: 228px;
  height: 452px;
  color: ${gray};
  text-decoration: none;
  border: 1px solid lightgray;
  border-radius: 6px;
  margin: 0 15px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  cursor: pointer;

  :hover {
    background-color: #f8f8f8;
  }

  :active {
    border: 1px solid black;
  }
`;

const imageWrapper = css`
  width: 228px;
  height: 152px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  object-fit: cover;
`;

const productText = css`
  margin: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 16rem;

  h2 {
    margin: 0 0 24px 0;
    font-size: 1.25rem;
  }

  p {
    font-size: 0.875rem;
    margin: 0 0 26px 0;
    line-height: 1.5;
    flex: 1 1 auto;
  }

  div {
    line-height: 1.5;
    color: ${mediumBlue};
    border-bottom: 2px solid transparent;
  }

  div:hover {
    border-bottom: 2px solid ${mediumBlue};
  }
`;

export function Products() {
  return (
    <div css={productSectionWrapper}>
      <a
        href="https://www.sparkasse.at/erstebank/privatkunden/konto-karten/google-pay"
        css={productWrapper}
      >
        <div>
          <img src={GooglePay} alt="Google Pay" css={imageWrapper} />
        </div>
        <div css={productText}>
          <h2>Google Pay ™</h2>
          <p>Bezahlen, schneller als Ihr Schatten.</p>
          <div>
            Bezahlen mit Google <br />
            Pay
          </div>
        </div>
      </a>
      <a
        href="https://www.sparkasse.at/erstebank/privatkunden/konto-karten/s-kreditkarten"
        css={productWrapper}
      >
        <div>
          <img
            src={Kreditkarten}
            alt="Abbild zweier Kreditkarten mit einem psychodelischen Hintergrund"
            css={imageWrapper}
          />
        </div>
        <div css={productText}>
          <h2>Kreditkarten</h2>
          <p>
            Neu: Smartcard oder Premiumcard mit Split Now-Funktion. Jetzt im 1.
            Jahr gratis*.
          </p>
          <div>Zu den Kreditkarten</div>
        </div>
      </a>
      <a
        href="https://www.sparkasse.at/erstebank/privatkunden/vorsorgen-versichern/kampagne/financial-health-versicherungen"
        css={productWrapper}
      >
        <div>
          <img
            src={Versicherung}
            alt="Eine Gruppe an Personen die gemeinsam auf einen Punkt nach vorne schauen, bis auf Opa und Enkel, die sich einander anschauen"
            css={imageWrapper}
          />
        </div>
        <div css={productText}>
          <h2>Vorsorgen</h2>
          <p>Sichern Sie sich und Ihre Finanzen ab.</p>
          <div>Jetzt absichern</div>
        </div>
      </a>
      <a
        href="https://www.sparkasse.at/erstebank/privatkunden/sparen-anlegen/sparen/bausparen"
        css={productWrapper}
      >
        <div>
          <img
            src={Bausparen}
            alt="Ein Mann der auf einer Couch und einem Sessel einen Vorwärtsspagat macht "
            css={imageWrapper}
          />
        </div>
        <div css={productText}>
          <h2>Bausparen</h2>
          <p>
            Sicher sparen mit fixen oder variablen Zinsen und staatlicher
            Prämie.
          </p>
          <div>Zum s Bausparen</div>
        </div>
      </a>
    </div>
  );
}
