import React from 'react';
import { AboutBox, Spaceman, Box, AboutTitle} from '../styledComponets/AboutStyle';
import LogoStyle from './Logo';
import PowerButton from './PowerButton';
import Astro from '../assets/Myworld.png'
import StarsParticle from '../componenets/StarsParticle';
import SocialIcons from './SocialIcons';


const AboutPage = () => {
    return (
        <>
            <Box>
            <StarsParticle theme='dark' />
            <LogoStyle theme='dark'/>
            <PowerButton />
            <SocialIcons theme='dark'/>
            <Spaceman>
                <img src={Astro} alt='astro.png' />
            </Spaceman>
            <AboutBox>
            Welcome to my world!! Im Que, Im a Retired Army Veteran! I enjoy coding. I learned to code thur a bootcamp. The journey has been tough and some days I felt like I wanted to quite, but with dedication and alot of practice I have learned and countine to learn everyday.  
            </AboutBox>
            <AboutTitle theme='light'>
                About
            </AboutTitle> 
            </Box>
        </>
    )
};

export default AboutPage;
