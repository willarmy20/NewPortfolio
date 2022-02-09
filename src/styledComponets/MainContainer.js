import styled, { keyframes } from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
background:${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;

h2,h3,h4,h5,h6{
    font-family:'Karia', sans-serif;
    font-weight:500
}
`

export const Container =styled.div`
padding: 2rem;
`



export const Contact = styled(Link)`
color:${props => props.theme.text}
position: absolute;
top: 2rem;
float: right;
text-decoration: none;
z-index: 1;
`
export const BLOG = styled(Link)`
color:${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
transform: rotate(90deg) translate(-50%, -50%);
margin-right: 20px;
`

export const WORK = styled(Link)`
color:${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: 2rem;
text-decoration: none;
z-index: 1;
transform:  translate(-50%, -50%) rotate(-90deg);
`
export const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right:0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

export const ABOUT = styled(Link)`
color:${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index: 1;
`

export const SKILLS = styled(Link)`
color:${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

export const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

export const Center = styled.button`
position: absolute;
top:${props => props.click ? '85%': '50%'};
left:${props => props.click ? '92%': '50%'};;
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
curisor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation:${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'}
    padding-top: 1rem;
}
`

export const MyLogo = styled.img`
    border-radius: 50%;
    padding-top: 1rem;
`

export const DarkDiv = styled.div`
postiton: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width:${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;

`

