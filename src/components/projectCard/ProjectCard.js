import React from 'react';
import {ProjectCardContainer, ProjectTitle} from './projectCard.styles';
import {projectInfo, } from '../../data/mock-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
//import { solid, regular, } from '@fortawesome/fontawesome-svg-core/import.macro' 


const ProjectCard = () => {
  
    const {title, tagline, projectField, type, spokenLanguage, duration, sizeOfTeam} = projectInfo;
  
    return (
    <ProjectCardContainer>
        <ProjectTitle>
            <div>{title}</div>
            <div><FontAwesomeIcon icon={faHeart} />
            </div>
        </ProjectTitle>
        <div>Tagline: {tagline}</div>
        <div>{projectField}</div>
        <div>{duration}</div>
        <div>{sizeOfTeam}</div>
        <div>{type}</div>
        <div>{spokenLanguage}</div>


    </ProjectCardContainer>
  )
}

export default ProjectCard