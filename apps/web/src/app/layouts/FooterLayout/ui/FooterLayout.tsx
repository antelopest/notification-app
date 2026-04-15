import React, { type ReactNode } from 'react';

type FooterLayoutProps = {
  children?: ReactNode;
}

export const FooterLayout: React.FC<FooterLayoutProps> = ({ children }) => {
  return (
    <>
      <footer className="p-4">
        {children}
      </footer>
    </>
  );
};