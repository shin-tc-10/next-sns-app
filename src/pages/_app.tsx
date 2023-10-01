import React from "react";
import Header from "@/components/Header";
import { AuthProvider } from "@/context/auth";
import type { AppProps } from 'next/app';
import '@/styles/globals.css';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
};

export default App;
