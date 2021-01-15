import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

const Header = () => {
  let history = useHistory();
  var user = false;
  //Put your name here.
  return user ? (     
      <header>
        <div>Hello, {user.username}</div>
      </header>
    ) : (
      <header>
        <div onClick={() => history.push('./')} ><h1 >Sopzak</h1></div>
        <br>
        </br>
        <ul>
          <li><a href='./'>Home</a></li>
          <li><a href='./About'>About</a></li>
        </ul>
      </header>
    );
}

export default Header;