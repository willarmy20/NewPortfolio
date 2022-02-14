import styled from "styled-components";
import {motion} from 'framer-motion';
import {ArrowAltCircleRight} from '@styled-icons/fa-regular/ArrowAltCircleRight';
import {ArrowAltCircleLeft} from '@styled-icons/fa-regular/ArrowAltCircleLeft';

export const Box = styled.div`
background-color: black;
height:400vh;
position: relative;
display: flex;
align-items: center;
`

export const ProjectBox = styled(motion.ul)`
// position: fixed;
margin-left: 90px;
width: 100vw;
height: 100vh;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
align-items: center;
overflow: hidden;
overflow-y: scroll;
`
