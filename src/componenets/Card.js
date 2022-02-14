import React from 'react'
import {Box, Description, Title, Footer, Link, Git, Img}from '../styledComponets/CardStyle';
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
                <Link to={`${projects.demo}`} target="_blank">
                    Visit
                </Link>
                <Git to={{pathname: `${projects.github}`}} target="_blank">
                    <GitHub />
                </Git>
            </Footer>
        </Box>
  )
}

export default Card