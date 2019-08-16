import React from 'react';
import {
  AzureAD,
  MsalAuthProviderFactory,
  Configuration,
  AuthenticationParameters,
  LoginType
} from 'react-aad-msal';
import { ReactNode } from 'react';
import config from 'configuration/secret/authentication';
import { store } from 'App';

interface AuthenticationProps {
  children?: ReactNode;
}

const appConfig: Configuration = {
  auth: {
    authority: config.authority,
    clientId: config.applicationId,
    redirectUri: config.redirectUri
  }
};

const params: AuthenticationParameters = {
  scopes: config.scopes
};

const unauthenticatedFunction = (
  loginFunction:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
) => {
  return (
    <React.Fragment>
      <button className="Button" onClick={loginFunction}>
        Login
      </button>
    </React.Fragment>
  );
};

const authenticatedFunction = (
  logoutFunction:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
) => {
  return (
    <div>
      You're logged in!
      <br />
      <br />
      <button onClick={logoutFunction} className="Button">
        Logout
      </button>
      <br />
    </div>
  );
};

const Authentication: React.FC = (props: AuthenticationProps) => {
  const provider = new MsalAuthProviderFactory(
    appConfig,
    params,
    LoginType.Popup
  );
  return (
    <AzureAD
      provider={provider}
      unauthenticatedFunction={unauthenticatedFunction}
      authenticatedFunction={authenticatedFunction}
      reduxStore={store}
    >
      {props.children}
    </AzureAD>
  );
};

export default Authentication;
