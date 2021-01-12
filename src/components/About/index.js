import React from 'react';
import './style.css';

import Header from '../Header';
import Footer from '../Footer/';

function About() {


  return (
    <div>
      <Header/>
      <div className="home-page">
          <div className="container">
            <div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="jesiel-sopzak"><a class="LI-simple-link" href='https://br.linkedin.com/in/jesiel-sopzak/en-us?trk=profile-badge'>Jesiel Sopzak</a></div>
            <br></br>
            <p>Full Stack Developer with over 14 years of experience in developing new features and apps for different products and companies by using programming like HTML, CSS, JavaScript, ASP.net, C#, Node.js, React and React Native.
              <br/>I like new challenges and study new skills in my spare time, like developing games with Unity, create APIs in Node or testing cloud technology like AWS from amazon or Firebase from google.
              <br/>
            </p>
            <p>
              See my curriculum on <a href='https://docs.google.com/document/d/1doUbpA-suUKRAHfKQPpoi9mWPy8P3RQHRYpoMiJE1yI/edit?usp=sharing'>google drive</a>.
            </p>
          </div>
      </div>
      <Footer/>
    </div>
  );
}

/**
 * 
 * 
 * 
           <!--<iframe 
            src={"https://docs.google.com/document/d/e/2PACX-1vTGgtePqd283EsEVdU93rf7rQ9X7I_T6HaggOlDIUSQOd_exJ8joLMuchqsq8lejwYd-TJF_vSU2m8U/pub?embedded=true"}
            width="100%" height="600"
              title="Resume"
           />-->
 * 
 */
export default About;