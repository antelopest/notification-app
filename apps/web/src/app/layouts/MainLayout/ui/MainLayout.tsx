import React, { type ReactNode } from 'react';

type MainLayoutProps = {
  children?: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <main className="flex-1">
        {children}
      </main>
    </>
  );
};