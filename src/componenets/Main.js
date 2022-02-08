import React from 'react';
import {Container, MainContainer, Contact, BLOG, WORK} from '../styledComponets/MainContainer'
import Logo from './Logo';
import PowerButton from './PowerButton';
import SocialIcons from './SocialIcons';

const Main = () => {
    return (
    <MainContainer>
        <Container>
            <PowerButton />
            <Logo />
            <SocialIcons />
            <Contact to= '#'>
                <h3>
                    Say hi..
                </h3>
            </Contact>
            <BLOG to= '/blog'>
                <h3>
                    Blog
                </h3>
            </BLOG>
            <WORK to='/work'>
                <h3>
                    Work
                </h3>
            </WORK>
            <BottomBar>
            <ABOUT to='/about'>
                <h3>
                    Work
                </h3>
            </ABOUT>
            <SKILLS to=dd '/skills'>
                <h3>
                    Work
                </h3>
            </SKILLS>
            </BottomBar>
        </Container>
    </MainContainer>
    )
};

export default Main;
