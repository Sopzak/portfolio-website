import React, { useState, useEffect } from 'react';
import './style.css';
import ProjectCard from '../ProjectCard';

import Header from '../Header';
import Footer from '../Footer/';

function Home() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    fetchProject();
  }, []);

  async function fetchProject() {
    //const apiData = await API.graphql({ query: listProjects });
    var data =[
        {
          id: 10,
        },
        {
          id: 1,
          name: "Sider Attack",
          description: "A game FPS for Mobile. In my free time I make games with unity and I create this demo to compose my portfolio.",
          url: "https://spider-attack.flycricket.io/",
          video: "1dGfyjcezfw",
        },
        {
          id: 1,
          name: "Campori Game",
          description: "An endless game for Mobile. This is my oldest work and it was a highly successful game with around 25 thousand downloads.",
          url: "https://campori-game.flycricket.io/",
          image: "img/CamporiGame.png",
        },
        {
          id: 3,
          name: "Simple Wiki",
          description: "A prototype website with React. It was a job selection challenge and I had to create a dynamic interface to add, reply and delete notes, placed by anyone and it was not necessary to consist of a database.",
          url: "https://master.d27d3dpxbc4u7k.amplifyapp.com/",
          image: "img/SimpleWiki1.png"
        },
      ];
    setProject(data);
    
  }

  return (
    <div>
      <Header/>
      <div className="home-page">
          <div className="container">
            {
              projects.map(project => (
              <div className="commenter" key={project.id}>
                <ProjectCard project={project} />
              </div>
              ))
            }
          </div>
      </div>
      <Footer/>
    </div>
  );
}
/**                  {
                      projects.map(project => (
                      <div key={project.id}>
                        <ProjectCard project={project} />
                      </div>
                      ))
                  }
 */
export default Home;