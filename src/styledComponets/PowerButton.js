import styled from 'styled-components'
import {PowerOff} from '@styled-icons/fa-solid/PowerOff'

export const PowerButtons = styled.button`
position: fixed;
top:2rem;
left: 50%;
transform: translate(-50%, 0);
background-color: #FCF6F4;
padding: 0.3rem;
border-radius:50%;
border:1px solid #000;
width:2.5rem;
height:2.5rem;
display: flex;
justifyContent: center;
aligh-item:center;
zIndex: 3;
cursor: pointer;
&:hover{
    background-color: rgba(0,255,0,0.4);
    box-shadow: 0 0 8px 6px;
}


&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

export const PowerIcon = styled(PowerOff)`
height:50;
width: 50;
`