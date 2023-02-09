import { Header } from './Components/Header';
import { LogoutSuccess } from './Components/LogoutSuccess';
import { Products } from './Components/Products';
/** @jsxImportSource @emotion/react */
import { container } from './Global';

function App() {
  return (
    <div css={container}>
      <Header />
      <LogoutSuccess />
      <Products />
    </div>
  );
}

export default App;
