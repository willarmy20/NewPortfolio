import React from 'react';
import { Box, Greeting, SubBox, Text} from '../styledComponets/IntroStyle';
import { motion } from "framer-motion";
import Me from '../assets/me_bit.png';




const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '200px'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <Greeting className='welcome'>Hi,</Greeting>
                    <Greeting>I'm CoderQue.</Greeting>
                    <div>I design and Code simple yet beautiful websites.</div>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro