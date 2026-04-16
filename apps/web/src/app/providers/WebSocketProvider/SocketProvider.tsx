// src/app/providers/SocketProvider.tsx
import { createContext, useContext, useEffect, ReactNode } from 'react';
import { socketClient } from '../../../shared/api/socket';

const SocketContext = createContext<{ send: (data: any) => void } | null>(null);

export const SocketProvider = ({ children }: { children?: ReactNode }) => {
  useEffect(() => {
    socketClient.connect();
    return () => socketClient.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={{ send: socketClient.sendNotification.bind(socketClient) }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  return context;
};