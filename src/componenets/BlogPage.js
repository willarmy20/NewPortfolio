import React from 'react';
import { Container, SoonDiv, TitleTwo} from '../styledComponets/BlogStyle';
import '../index.css';
import PowerButton from './PowerButton';
import LogoStyle from './Logo';



const BlogPage = () => {
    return (
        <Container>
            <PowerButton />
            <LogoStyle />
            <SoonDiv>
            <TitleTwo> Blog Coming Soon!!!!</TitleTwo>
            </SoonDiv>
        </Container>
    )
};

export default BlogPage;
