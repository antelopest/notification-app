import { Header } from './widgets/Header';
import { Footer } from './widgets/Footer';

import { MainLayout } from './app/layouts/MainLayout';
import { HeaderLayout } from './app/layouts/HeaderLayout';
import { FooterLayout } from './app/layouts/FooterLayout';

export const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-zinc-950">
        <HeaderLayout>
          <Header></Header>
        </HeaderLayout>
        <MainLayout>
          <h3>Client</h3>
          <p>Your name:</p>
          <input type="text"></input>
          <button>Registrate</button>
        </MainLayout>
        <FooterLayout>
          <Footer></Footer>
        </FooterLayout>
      </div>
    </>
  );
}