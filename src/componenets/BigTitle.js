import React from 'react'
import {Text} from '../styledComponets/BigTitleStyle'


const BigTitle = (props) => {
    return (
        <Text  top={props.top}  left={props.left}  right={props.right}>
            {props.text}
        </Text>
    )
}

export default BigTitle

