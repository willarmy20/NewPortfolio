import styled from "styled-components";
import Desks from '../assets/desk.png';


export const Container = styled.div`
positon: relative;
background-image: url(${Desks});
width: 100%;
height: 100vh;
background-size: cover;
background-repeat: no-repeat;
`
export const SoonDiv = styled.div`
position: absolute;
top: 50%;
left: 35%;
margin: -25px 0 0 -25px; 
font-size: 30px

`

export const CountdownTimer = styled.div`
display: flex;
border: 2px solid black;
width: 567px;
height: 150px;
align-items: center;
`
export const Timer = styled.span`
margin-left: 5px;
margin-right: 5px;
`