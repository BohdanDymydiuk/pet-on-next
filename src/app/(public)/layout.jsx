import React from 'react';
import { Header } from '../components/Header';

const Layout = ({children}) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-full max-w-xl flex justify-center px-4 py-8 mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
