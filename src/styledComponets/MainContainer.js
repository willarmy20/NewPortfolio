import styled from 'styled-components'
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
color:${props => props.theme.text};
position: absolute;
top: 50%;
left: 2rem;
text-decoration: none;
z-index: 1;
transform:  translate(-50%, -50%) rotate(-90deg);
`
