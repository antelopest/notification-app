import { SocketProvider, useSocket } from './app/providers/WebSocketProvider/SocketProvider';

import { Header } from './widgets/Header';
import { Footer } from './widgets/Footer';

import { MainLayout } from './app/layouts/MainLayout';
import { HeaderLayout } from './app/layouts/HeaderLayout';
import { FooterLayout } from './app/layouts/FooterLayout';

function SendButton() {
  const { send } = useSocket();

  const sendMessage = () => {
    send({ message: 'Hello!' });
  }

  return (
    <button className="px-4 py-2 bg-blue-600 text-zinc-100
     rounded-lg hover:bg-blue-700 cursor-pointer transition-colors" onClick={sendMessage}>
      Send Notification
    </button >
  );
}

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
          <input id="name" type="text"></input>
          <SocketProvider>
            <SendButton />
          </SocketProvider>
        </MainLayout>
        <FooterLayout>
          <Footer></Footer>
        </FooterLayout>
      </div>
    </>
  );
}