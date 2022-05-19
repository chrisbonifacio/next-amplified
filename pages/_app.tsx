import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";

import awsConfig from "../src/aws-exports";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const isLocalhost = Boolean(
      window.location.hostname === "localhost" ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === "[::1]" ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
    );

    // Assuming you have two redirect URIs, and the first is for localhost and second is for production
    const [localRedirectSignIn, productionRedirectSignIn] =
      awsConfig.oauth.redirectSignIn.split(",");

    const [localRedirectSignOut, productionRedirectSignOut] =
      awsConfig.oauth.redirectSignOut.split(",");

    const updatedAwsConfig = {
      ...awsConfig,
      oauth: {
        ...awsConfig.oauth,
        redirectSignIn: isLocalhost
          ? localRedirectSignIn
          : productionRedirectSignIn,
        redirectSignOut: isLocalhost
          ? localRedirectSignOut
          : productionRedirectSignOut,
      },
    };

    Amplify.configure(updatedAwsConfig);
  });

  return <Component {...pageProps} />;
}

export default MyApp;
