import React from 'react';
import { projectInfo } from "../../data/mock-data";
import { TheProjectContainer } from './projectDetailsPage.styles';

 

const ProjectDetailsPage= () => {
    
    const {
		title,
		tagline,
		projectField,
		type,
		spokenLanguage,
		duration,
		sizeOfTeam,
		roles,
		description,
		goal,
		plan
	} = projectInfo;
  
  
    return (
    <TheProjectContainer>
		<h3>THE PROJECT</h3>
		<h4>Project Goal</h4>
		<p>{goal}</p>
		<h4>Project Description</h4>
		<p>{description}</p>
		<h4>Project Plan</h4>
		<p>{plan}</p>

	</TheProjectContainer>
  )
}

export default ProjectDetailsPage