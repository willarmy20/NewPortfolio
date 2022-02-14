import React from 'react';
import {Box, ProjectBox, ProjectTitle} from '../styledComponets/ProjectsStyle';
import SocialIcons from './SocialIcons';
import PowerButton from './PowerButton'
import LogoStyle from './Logo';
import Card from './Card';
import { Work } from "../data/WorkData";




const ProjectPage = () => {
    return (
        <Box>
            <LogoStyle theme='dark'  />
            <SocialIcons />
            <PowerButton />
            <ProjectBox>
                    {
                        Work.map( (projects,id) =>
                            <Card key={id} projects={projects} />
                        )
                    } 
            </ProjectBox>
            {/* <ProjectTitle theme='light'>
                Projects
            </ProjectTitle>  */}
        </Box>
    )
};

export default ProjectPage;
