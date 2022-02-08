import styled from 'styled-components'
import {Github} from '@styled-icons/boxicons-logos/Github'
import {FacebookCircle} from '@styled-icons/boxicons-logos/FacebookCircle'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'

export const GitHubIcon = styled(Github)`
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

export const Icons = styled.div`
display:flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
z-index:3;
`

export const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.theme.text};
`