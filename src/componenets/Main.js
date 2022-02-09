import React, {useState} from 'react';
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
                <h2>
                    Say hi..
                </h2>
            </Contact>
            <BLOG to= '/blog'>
                <h2>
                    Blog
                </h2>
            </BLOG>
            <WORK to='/work' click={click}>
                <h2>
                    PROJECTS
                </h2>
            </WORK>
            <BottomBar>
            <ABOUT to='/about' click={click}>
                <h2>
                    ABOUT
                </h2>
            </ABOUT>
            <SKILLS to='/skills'>
                <h2>
                    My SKILLS
                </h2>
            </SKILLS>
            </BottomBar>
        </Container>
        {click ? <Intro click={click}/> : null}
    </MainContainer>
    )
};

export default Main;
