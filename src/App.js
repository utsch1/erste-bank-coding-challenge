import { Header } from './Components/Header';
import { LogoutSuccess } from './Components/LogoutSuccess';
/** @jsxImportSource @emotion/react */
import { container } from './Global';

function App() {
  return (
    <div css={container}>
      <Header />
      <LogoutSuccess />
    </div>
  );
}

export default App;
