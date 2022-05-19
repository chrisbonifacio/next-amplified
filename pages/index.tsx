import { useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Todo } from "../src/models";
import type { NextPage } from "next";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const Home: NextPage = () => {
  return (
    <Authenticator>
      {({ user, signOut }) => {
        return (
          <div>
            <h1>Welcome, {user?.getUsername()}</h1>
            <button onClick={signOut}>Sign Out</button>
          </div>
        );
      }}
    </Authenticator>
  );
};

export default Home;
