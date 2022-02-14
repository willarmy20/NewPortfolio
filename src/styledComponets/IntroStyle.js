import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Box = styled(motion.div)`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index:1;
    @media (max-width: 390px) and (max-width:412px){
        top: 350px;
        width: 250px;
        border-top: 2px solid white;
        border-bottom: 2px solid black;
        border-left: 2px solid white;
        border-right: 3px solid black;
        padding:1rem;
    }
`

export const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 400px;
    height: auto;
    @media (max-width: 390px) and (max-width:412px){
        bottom: unset;
        top: 70%;
        left: -5%;
    }
}
@media (max-width: 390px) and (max-width:412px){
    bottom: unset;
    margin-top:-10%;
}

`

export const Text = styled.div`
font-size: 1vh;
color: ${props => props.theme.body};
padding: 1rem;
cursor: pointer;
display: flex;
flex-direction: column;

&>*:last-child{
    color: yellow;
    font-size: calc(0.5rem + 1.5vw);
    font-weight:50;
    @media (max-width: 390px) and (max-width:412px){
        font-size: calc(0.6rem + 3.0vw);
        font-weight: 2vw;
        color: blue;
    }
}
@media (max-width: 390px) and (max-width:412px){
    font-size: calc(0.6rem + 3.0vw);
    font-weight: 2vw;
    color: Yellow;
}
`

export const Greeting = styled.div`
font-size: 2rem;
@media (max-width: 390px) and (max-width:412px){
}
`
