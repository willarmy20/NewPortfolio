import styled, { keyframes } from "styled-components"

export const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`


export const AllOfMe = styled.img`
position: absolute;
    top:0;
    right: 0;
    width: 300px;
    height: 300px;
`

export const AboutBox = styled.div`
position: fixed;
top: 50%;
left: 50%;
height: 300px;
font-size: 180%;
padding: 1rem;
z-index: 3;
line-height: 1.5;
transform: translate(-50%, -50%);
display: flex;
border: 2px solid;
border-color: blue;
color: yellow;
backdrop-filter: blur(4px);
font-family: 'Ubutntu Mono', monospace;
font-style: italic;
box-shadow: 5px 10px #0000FF
`

export const WhatsUp = styled.img`
position: absolute;
    top:0;
    left: 0;
    width: 300px;
    height: 300px;
`
export const float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}
`
export const Spaceman = styled.div`
position: absolute;
top: 30%;
left: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`

export const AboutTitle = styled.h1`
position: absolute;
top: 80%;
left: 70%;
width: 100%;
height: 100%;
opacity: 0.6;
color: #FFD700;
font-size: 600%;
`
