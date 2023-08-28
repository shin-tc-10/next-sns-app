import React from "react";
import HeaderMenu from "@/components/HeaderMenu";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <HeaderMenu />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
