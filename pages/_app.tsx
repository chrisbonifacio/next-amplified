import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import { getUpdatedAWSConfig } from "../utils/getUpdatedAWSConfig";
import { useEffect } from "react";
import Link from "next/link";
import { Authenticator } from "@aws-amplify/ui-react";

//redeploy

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Amplify.configure(getUpdatedAWSConfig());

    Amplify.Logger.LOG_LEVEL = "DEBUG";
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
      </nav>
      <Authenticator.Provider>
        <Component {...pageProps} />
      </Authenticator.Provider>
    </div>
  );
}

export default MyApp;
