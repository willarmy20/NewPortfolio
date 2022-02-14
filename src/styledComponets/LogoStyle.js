import styled from 'styled-components'
import { themes } from '../componenets/Themes'

export const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? themes.DarkTheme.text : themes.DarkTheme.body};
font-family: 'Pacifico',cursive; 
position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
@media (max-width: 390px) and (max-width:412px){
   color:Blue;
}
@media (max-width:820px){
   color: Blue;
}
`

