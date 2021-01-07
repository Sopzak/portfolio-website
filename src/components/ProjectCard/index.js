import React from 'react';
import './style.css'
export default function ProjectCard(props) {
 return (
    <div className="project-container">
        <p>{props.project.description}</p>
        <div >
            Project: {props.project.name} {props.project.url}
        </div>
        <button onClick={() => props.onBtnDelete}>Delete</button>
    </div>
 );
}