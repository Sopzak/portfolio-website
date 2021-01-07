import React, { useState, useEffect } from 'react';
import './style.css';
import { API } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { listProjects } from '../../graphql/queries';
import { createProject as createProjectMutation, deleteProject as deleteProjectMutation } from '../../graphql/mutations';
import ProjectCard from '../ProjectCard';


const initialFormState = { name: '', description: '' }

function Home() {
  const [projects, setProject] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [showModal, setStateModal] = useState("none");

  useEffect(() => {
    fetchProject();
  }, []);

  async function fetchProject() {
    const apiData = await API.graphql({ query: listProjects });
    setProject(apiData.data.listProjects.items);
  }

  async function createProject() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createProjectMutation, variables: { input: formData } });
    setProject([ ...projects, formData ]);
    setFormData(initialFormState);
  }

  async function deleteProject({ id }) {
    const newProjectArray = projects.filter(project => project.id !== id);
    setProject(newProjectArray);
    await API.graphql({ query: deleteProjectMutation, variables: { input: { id } }});
  }

  return (
    <div className="home-page">
        <div className="container">
            <div className="modal" style={{display: showModal}}>
              <div className="modal-content">
                <span 
                  className="close" 
                  onClick={() => {setStateModal("none");}}>
                    &times;
                </span>
                <input
                    aria-label={"name"}
                    aria-required="true"
                    onChange={e => setFormData({ ...formData, 'name': e.target.value})}
                    placeholder="Name"
                    className="textinput" 
                    value={formData.name}
                />
                <input
                    aria-label={"url"}
                    aria-required="true"
                    className="textinput" 
                    onChange={e => setFormData({ ...formData, 'url': e.target.value})}
                    placeholder="e-mail"
                    value={formData.url}
                />
                <textarea 
                    aria-label={"Project description"}
                    aria-required="true"
                    className="textinput" 
                    onChange={e => setFormData({ ...formData, 'description': e.target.value})}
                    placeholder="Project description"
                    value={formData.description}
                />
                <button 
                    className="btn"
                    aria-label={"Create Project"}
                    onClick={createProject}>
                        Create Project
                </button>
              </div>
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
                      <ProjectCard project={project} 
                        onBtnDelete={() => deleteProject(project)} />
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
  );
}

//Now it`s necessary autentication to enter 
export default withAuthenticator(Home);