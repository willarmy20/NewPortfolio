import styled from 'styled-components'
import {Html5} from '@styled-icons/remix-line/Html5'
import {LogoCss3} from '@styled-icons/ionicons-solid/LogoCss3'
import {Javascript} from '@styled-icons/fluentui-system-regular/Javascript'
import {ReactLogo} from '@styled-icons/boxicons-logos/ReactLogo';
import {Postgresql} from '@styled-icons/simple-icons/Postgresql';

export const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
align-items: center;
`

export const Main = styled.img`
position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 300px;
    height: 300px;
`

export const HtmlIcon = styled(Html5)`
color: red;
height:10%;
width: 10%;
`

export const CssIcon = styled(LogoCss3)`
color: brown;
height: 10%;
width: 10%;
`

export const JavaScriptIcon = styled(Javascript)`
color: green;
height: 10%;
width: 10%;
`

export const RIcons = styled(ReactLogo)`
color: blue;
height: 10%;
width: 10%;
`

export const Postgress = styled(Postgresql)`
color: blue;
height: 10%;
width: 10%;
`
export const SkillBox = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: -360px;
margin-left: 100px;

`
