import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { Auth } from "aws-amplify";
import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={async () => {
          const credentials = await Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Facebook,
          });

          console.log(credentials);
        }}
      >
        Login With Facebook
      </button>
    </div>
  );
};

export default Login;
