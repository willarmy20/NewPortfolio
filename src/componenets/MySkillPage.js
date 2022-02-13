import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from './Themes';
import {Box, CssIcon, HtmlIcon, JavaScriptIcon, Main, Postgress, RIcons, SkillBox} from '../styledComponets/SkillStyle'
import ComputerSkills from '../assets/computer.png'
import PowerButton from './PowerButton';
import LogoStyle from './Logo';
import SocialIcons from './SocialIcons';
import ParticleComponenet from './ParticleComponenet';
import BigTitle from '../componenets/BigTitle'





const MySkillPage = () => {
    return (
    <ThemeProvider theme={themes.lightTheme}>
        <Box>
            <ParticleComponenet />
            <LogoStyle />
            <PowerButton />
            <SocialIcons />
            <Main src={ComputerSkills} />
            <SkillBox>
            <HtmlIcon />
            <CssIcon />
            <JavaScriptIcon  />
            <RIcons />
            <Postgress />
            </SkillBox>
            <BigTitle text='Skills' top='70%' right='10%' />
        </Box>
        
    </ThemeProvider>
    )
};

export default MySkillPage;

