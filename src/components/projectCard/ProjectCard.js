import React from "react";
import {
	ProjectCardContainer,
	ProjectTitle,
	IconWrapper,
} from "./projectCard.styles";
import { projectInfo } from "../../data/mock-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClock } from "@fortawesome/free-regular-svg-icons";
import {
	faHeart as faHeartSolid,
	faGlobe,
	faPeopleGroup,
    faComputer,
    faLeaf
} from "@fortawesome/free-solid-svg-icons";
//import { solid, regular, } from '@fortawesome/fontawesome-svg-core/import.macro'

const ProjectCard = () => {
	const {
		title,
		tagline,
		projectField,
		type,
		spokenLanguage,
		duration,
		sizeOfTeam,
	} = projectInfo;

	return (
		<ProjectCardContainer>
			<ProjectTitle>
				<div>{title}</div>
				<FontAwesomeIcon icon={faHeart} />
				{/* <FontAwesomeIcon icon={faHeartSolid} />             */}
			</ProjectTitle>
			<div>Tagline: {tagline}</div>
			<IconWrapper>
				<div><FontAwesomeIcon icon={faLeaf} />{projectField}</div>
				<div><FontAwesomeIcon icon={faComputer} />{type}</div>
				<div>
					<FontAwesomeIcon icon={faGlobe} />
					{spokenLanguage}
				</div>
			</IconWrapper>
			<IconWrapper>
				<div>
					<FontAwesomeIcon icon={faClock} />
					{duration}
				</div>
				<div>
					<FontAwesomeIcon icon={faPeopleGroup} />
					{sizeOfTeam}
				</div>
			</IconWrapper>
		</ProjectCardContainer>
	);
};

export default ProjectCard;
