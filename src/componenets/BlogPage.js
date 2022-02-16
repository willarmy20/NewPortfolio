import React from 'react';
import { Container, SoonDiv, CountdownTimer, Desk, Timer } from '../styledComponets/BlogStyle';


const BlogPage = () => {
    return (
        <Container>
            <h1>IQ's World</h1>
            <h2>Coming Soon!!!!</h2>
            <SoonDiv>
                <CountdownTimer>
                    <Timer>20</Timer>
                    <Timer>days</Timer>
                    <Timer>12</Timer>
                    <Timer>hours</Timer>
                    <Timer>04</Timer>
                    <Timer>minutes</Timer>
                    <Timer>32</Timer>
                    <Timer>seconds</Timer>
                </CountdownTimer>
            </SoonDiv>
        </Container>
    )
};

export default BlogPage;
