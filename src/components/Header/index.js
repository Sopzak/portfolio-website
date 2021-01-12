import React from 'react';
import './style.css';

const Header = () => {
  var user = false;
  //Put your name here.
  return user ? (     
      <header>
        <div>Hello, {user.username}</div>
      </header>
    ) : (
      <header>
        <h1>Sopzak Portfolio</h1>
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