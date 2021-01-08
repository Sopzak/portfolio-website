import React from 'react';
import './style.css';

import Amplify from 'aws-amplify';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig);

const Header = () => {

  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
      return onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);

  //Put your name here.
  return authState === AuthState.SignedIn && user ? (     
      <header>
        <div>Hello, {user.username}</div>
        <AmplifySignOut />
      </header>
    ) : (
      <header>
        <h1>Sopzak Portfolio</h1>
      </header>
    );
}

export default Header;