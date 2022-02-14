import styled from "styled-components";
import {motion} from 'framer-motion';


export const Box = styled.div`
background-color: black;
background-size: cover;
width: 100vw;
min-height: 100vh;
position: relative;
display: flex;
align-items: center;
`

export const ProjectBox = styled(motion.ul)`
// position: fixed;
margin-top: 150px;
margin-left: 90px;
width: 100vw;
height: 100vh;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
align-items: center;
overflow: hidden;
overflow-y: scroll;
@media (max-width: 390px) and (max-width:412px){
    display: grid;
    grid-template-columns: 1fr;
    padding: 1rem;
    margin-left: 26px;
    grid-row-gap: 20px;
}
@media (max-width:820px){
    display: grid;
    grid-template-columns: 47.5% 47.5%;
    padding: 0;
    margin-left: 70px;
    grid-row-gap: 30px;
}
`
