import { useEffect, useState } from "react";
import { Auth, DataStore, Hub } from "aws-amplify";
import { Todo } from "../src/models";
import type { NextPage } from "next";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const Home = () => {
  const [stateUser, setStateUser] = useState(null);

  useEffect(() => {
    const listener = async (capsule: any) => {
      console.log(capsule);
      if (!localStorage.getItem("facebook_session"))
        if (capsule.payload.event === "signIn") {
          const authUser = await Auth.currentAuthenticatedUser();
          localStorage.setItem("facebook_session", JSON.stringify(authUser));
          setStateUser(authUser);
        }
    };

    Hub.listen("auth", listener);

    return () => Hub.remove("auth", listener);
  }, [stateUser]);

  return (
    <Authenticator>
      {({ user, signOut }) => {
        const signOutAndClearLocalStorage = async () => {
          signOut && (await signOut());
          localStorage.removeItem("facebook_session");
        };

        return (
          <div>
            <h1>Welcome, {user?.getUsername()}</h1>
            <button onClick={signOutAndClearLocalStorage}>Sign Out</button>

            {localStorage.getItem("facebook_session") ? (
              <div>
                Got user from localStorage:{" "}
                <pre>
                  {JSON.stringify(
                    localStorage.getItem("facebook_session"),
                    null,
                    2
                  )}
                </pre>
              </div>
            ) : (
              <div>Loading</div>
            )}
          </div>
        );
      }}
    </Authenticator>
  );
};

export default Home;
