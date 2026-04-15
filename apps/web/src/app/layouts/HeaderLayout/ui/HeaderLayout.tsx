import React, { type ReactNode } from 'react';

type HeaderLayoutProps = {
  children?: ReactNode;
}

export const HeaderLayout: React.FC<HeaderLayoutProps> = ({ children }) => {
  return (
    <>
      <header className="p-4">
        {children}
      </header>
    </>
  );
};