import { Contact } from './Components/Contact';
// import { FloatingNav } from './Components/FloatingNavigation';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { LogoutSuccess } from './Components/LogoutSuccess';
import { Products } from './Components/Products';
/** @jsxImportSource @emotion/react */
import { container } from './Global';

function App() {
  return (
    <div css={container}>
      <Header />
      {/* <FloatingNav /> */}
      <LogoutSuccess />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
