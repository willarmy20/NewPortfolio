//Home Button
import React from 'react';
import { Link } from "react-router-dom";
import {PowerButtons} from '../styledComponets/PowerButton'
import {PowerIcon} from '../styledComponets/PowerButton'


const PowerButton = () => {

    return (
        <Link to="/">
        <PowerButtons>
                <PowerIcon />
        </PowerButtons>
        </Link>
    )
};

export default PowerButton;
