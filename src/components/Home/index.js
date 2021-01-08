import React, { useState, useEffect } from 'react';
import './style.css';
import { API } from 'aws-amplify';
import { listProjects } from '../../graphql/queries';
import ProjectCard from '../ProjectCard';


const initialFormState = { name: '', description: '' }

function Home() {
  const [projects, setProject] = useState([]);
  const [showModal, setStateModal] = useState("none");

  useEffect(() => {
    fetchProject();
  }, []);

  async function fetchProject() {
    const apiData = await API.graphql({ query: listProjects });
    setProject(apiData.data.listProjects.items);
  }

  return (
    <div className="home-page">
        <div className="container">
            <div className="modal" style={{display: showModal}}>
            </div>
            <button 
                aria-label={"Add Project"}
                onClick={() => {setStateModal("block");}}>
                    Add Project
            </button>
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
  );
}

export default Home;