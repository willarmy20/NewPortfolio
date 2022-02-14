import React from 'react'
import {Box, Description, Title, Footer, Git, Img, Links}from '../styledComponets/CardStyle';
import {GitHub} from '../styledComponets/CardStyle';




const Card = ({projects}) =>{
  return (
      <Box>
            <Img src={projects.artwork} />
            <Title>{projects.name}</Title>
            <Description>
                {projects.description}
            </Description>
            <Footer>
                <Links href={projects.demo} target="_blank">
                    Visit
                </Links>
                <Git href={projects.github} target="_blank">
                    <GitHub />
                </Git>
            </Footer>
        </Box>
  )
}

export default Card