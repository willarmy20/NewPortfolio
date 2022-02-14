import { motion } from 'framer-motion';
import styled from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/Github'



export const Box = styled(motion.li)`
width: 16rem;
height: 40vh;
background-color: white;
color:black;
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;
&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
border: 1px solid ${props => props.theme.text};
`
export const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

export const Description = styled.h2`
font-size: 100%;
font-family: 'Karla',sans-serif;
font-weight: 500;
`
export const Img = styled.img`
height: 15vh;
width: 18vw;
@media (max-width: 390px) and (max-width:412px){
    height:17vh;
    width: 60vw;
}
@media (max-width:820px){
    height:25vh;
    width: 32vw;
}
`
export const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

export const Links = styled.a`
background-color: black;
color: white;
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size:calc(1em + 0.5vw);
${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};
}
`

export const Git = styled.a`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:${props =>props.theme.text};
    }
}
`

export const GitHub = styled(Github)`
height:40px;
width: 40px;
`

