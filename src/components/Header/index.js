import React from 'react';
import './style.css';

import { AmplifySignOut} from '@aws-amplify/ui-react';

function Header() {
  //Put your name here.

  return (
    <header>
      <h1>Sopzak WebSite</h1>
      <AmplifySignOut />
    </header>
  );
}

export default Header;