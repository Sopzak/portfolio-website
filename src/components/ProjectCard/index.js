import React from 'react';
import './style.css'
export default function ProjectCard(props) {
    if(props.project.id === 0){
        return (
            <div className="project-container">
                <div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="jesiel-sopzak"><a class="LI-simple-link" href='https://br.linkedin.com/in/jesiel-sopzak/en-us?trk=profile-badge'>Jesiel Sopzak</a></div>
                <br></br><a href="./About">See More</a>
            </div>
        );
    }
    if(props.project.id === 10){
        return (
            <div className="project-container">
                <div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="jesiel-sopzak"><a class="LI-simple-link" href='https://br.linkedin.com/in/jesiel-sopzak/en-us?trk=profile-badge'>Jesiel Sopzak</a></div>
                <br></br><a href="./About">See More</a>
            </div>
        );
    }
 return (
    <div className="project-container" style={{'heigth':'600px'}} >
        <div >
            Project: {props.project.name}
        </div>
        {props.project.video &&
            <iframe 
                src={"https://www.youtube.com/embed/" +  props.project.video}
                frameBorder='0'
                width="100%" 
                height="300px"
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'/>
        }
        {props.project.image &&
            <img style={{'max-width':'340px'}} src={'../'+ props.project.image } alt={props.project.name} />
        }
        <p style={{'max-width':'350px'}} >{props.project.description}</p>
        <a href={ props.project.url}>See More</a>
    </div>
 );
}