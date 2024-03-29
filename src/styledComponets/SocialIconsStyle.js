import styled from 'styled-components'
import {Github} from '@styled-icons/boxicons-logos/Github'
import {FacebookCircle} from '@styled-icons/boxicons-logos/FacebookCircle'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import { themes } from '../componenets/Themes'
import { motion } from 'framer-motion'

export const Icons = styled.div`
display:flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
z-index:3;
fill: white;
&>*:not(:last-child){
    margin: 0.5rem 0;
}
@media (max-width: 390px) and (max-width:412px){
    fill: blue;
    left: 1px;
    margin-bottom: -130px;
}
`
export const GitHubIcon = styled(Github)`
color: ${props => props.color === 'dark' ? themes.DarkTheme.text : themes.DarkTheme.body};
height:10%;
width: 10%;
`
export const FacebookIcon = styled(FacebookCircle)`
height:10%;
width: 10%;

`

export const InstagramIcon = styled(Instagram)`
height:10%;
width: 10%;
`

export const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? themes.DarkTheme.text : themes.DarkTheme.body };
`