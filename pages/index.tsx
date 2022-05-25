import { useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";
import type { NextPage } from "next";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { getUpdatedAWSConfig } from "../utils/getUpdatedAWSConfig";

const Home: NextPage = () => {
  const [facebookSession, setFacebookSession] = useState<any>(null);
  const { user } = useAuthenticator();

  useEffect(() => {
    let facebookSession = localStorage.getItem("facebook_session");
    if (facebookSession) {
      setFacebookSession(JSON.stringify(JSON.parse(facebookSession), null, 2));
    }
    let cognitoCacheCleared = localStorage.getItem("cognito_cache_cleared");
    if (cognitoCacheCleared) {
      localStorage.removeItem("cognito_cache_cleared");
      window.close();
      return;
    }

    const handleLoginError = (error: any) => {
      localStorage.setItem(
        "facebook_session",
        JSON.stringify({ type: "ERROR", response: error })
      );
      window.close();
    };

    const listener = async ({ payload }: any) => {
      switch (payload.event) {
        case "signIn":
          //setting facebook_session here as Auth.currentAuthenticationUser not returning correct info some times
          Auth.currentAuthenticatedUser()
            .then(async (session) => {
              localStorage.setItem(
                "facebook_session",
                JSON.stringify({ type: "SUCCESS", response: session })
              );

              localStorage.setItem("cognito_cache_cleared", "true");
              window.location.href =
                getUpdatedAWSConfig().oauth.redirectSignOut;
            })
            .catch((error) => {
              console.log(error);
            });

        case "signIn_failure":
          handleLoginError(payload?.data?.message);
          break;

        case "signOut":
          break;

        default:
          break;
      }
    };

    Hub.listen("auth", listener);

    return () => {
      Hub.remove("auth", listener);
    };
  }, []);

  const signOutAndClearLocalStorage = async () => {
    await Auth.signOut();
    localStorage.clear();
    window.location.href = window.location.origin + "/login";
  };

  return (
    <div>
      <h1>Welcome, {user?.getUsername()}</h1>
      <button onClick={signOutAndClearLocalStorage}>Sign Out</button>

      <div>
        <h2>Facebook Session from Local Storage</h2>
        <pre>{facebookSession}</pre>
      </div>
    </div>
  );
};

export default Home;
