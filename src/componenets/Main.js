import React, {useState} from 'react';
import { motion } from 'framer-motion'
import {Container, MainContainer, Contact, BLOG, WORK, BottomBar, ABOUT, SKILLS, Center, MyLogo, DarkDiv} from '../styledComponets/MainContainer'
import Logo from './Logo';
import PowerButton from './PowerButton';
import SocialIcons from './SocialIcons';
import CoderLogo from '../assets/coder.jpg'
import Intro from './Intro';




const Main = () => {
    const [click, setClick] = useState(false);

    //function to handleClick
    const handleClick = () =>{
        console.log('this is:', click)
        setClick(!click);
    }

    return (
    <MainContainer>
        <DarkDiv  click={click}/>
        <Container>
            <PowerButton />
            <Logo theme={click ? 'dark' : 'light'} />
            <SocialIcons theme={click ? 'dark' : 'light'}/>
            <Center click={click}>
                <MyLogo onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} src={CoderLogo} fill='currentColor' alt='coder'/>
                <span>click here</span>
            </Center>
            <Contact to= '#'>
                <motion.h2
                initial={{
                    y:-200,
                    transition:{type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: {type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                >
                    Say hi..
                </motion.h2>
            </Contact>
            <BLOG to= '/blog'>
                <motion.h2
                initial={{
                    y:-200,
                    transition:{type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: {type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                >
                    Blog
                </motion.h2>
            </BLOG>
            <WORK to='/project' click={+click}>
            <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Projects
                </motion.h2>
            </WORK>
            <BottomBar>
            <ABOUT to='/about' click={+click}>
            <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    About
                </motion.h2>
            </ABOUT>
            <SKILLS to='/skills'>
            <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Skills
                </motion.h2>
            </SKILLS>
            </BottomBar>
        </Container>
        {click ? <Intro click={click} /> : null}
    </MainContainer>
    )
};

export default Main;
