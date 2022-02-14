import React from 'react';
import {Box, ProjectBox} from '../styledComponets/ProjectsStyle';
import SocialIcons from './SocialIcons';
import PowerButton from '../componenets/PowerButton'
import LogoStyle from './Logo';
import Card from './Card';
import { Work } from "../data/WorkData";




const WorkPage = () => {
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
        </Box>
    )
};

export default WorkPage;
