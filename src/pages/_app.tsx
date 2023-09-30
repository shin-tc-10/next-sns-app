import React from "react";
import HeaderMenu from "@/components/HeaderMenu";
import { AuthProvider } from "@/context/auth";
import type { AppProps } from 'next/app';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <div>
        <HeaderMenu />
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
};

export default App;
