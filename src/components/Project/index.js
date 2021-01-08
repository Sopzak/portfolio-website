import React, { useState, useEffect } from 'react';
import './style.css';
import { API } from 'aws-amplify';
import { listProjects } from '../../graphql/queries';
import ProjectCard from '../ProjectCard';

import Header from '../Header';
import Footer from '../Footer';

function Home() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    fetchProject();
  }, []);

  async function fetchProject() {
    const apiData = await API.graphql({ query: listProjects });
    setProject(apiData.data.listProjects.items);
  }

  return (
    <div>
      <Header/>
      <div className="home-page">
          <div className="container">
              <div style={{marginBottom: 30, maxHeight:'500px', minHeight: '300px', overflowY: 'scroll' }}>
                  {
                      projects.map(project => (
                      <div key={project.id}>
                        <ProjectCard project={project} />
                      </div>
                      ))
                  }
              </div>
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;