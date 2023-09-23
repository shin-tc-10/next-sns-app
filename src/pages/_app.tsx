import React from "react";
import HeaderMenu from "@/components/HeaderMenu";
import { AuthProvider } from "@/context/auth";

const App = ({ Component, pageProps }) => {
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
