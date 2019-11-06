import * as React from "react";
import Head from "next/head";

const Layout: React.FC = ({ children }) => (
  <div>
    <Head>
      <title>React + Next boilerplate</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    {children}
    <footer></footer>
  </div>
);

export default Layout;
