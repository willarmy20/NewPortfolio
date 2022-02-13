import React from 'react';
import Particles from "react-tsparticles";
import { Box } from '../styledComponets/ParticlStyle';


const ParticleComponenet = () => {
        const particlesInit = (main) => {
            console.log(main);
            // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        };
        
        const particlesLoaded = (container) => {
            console.log(container);
        };
    return (
        <Box>
            <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            background: {
            color: {
                value: "#000000",
            },
            },
            fpsLimit: 60,
            interactivity: {
            events: {
                onClick: {
                enable: true,
                mode: "push",
                },
                onHover: {
                enable: true,
                mode: "repulse",
                },
                resize: true,
            },
            modes: {
                bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
                },
                push: {
                quantity: 4,
                },
                repulse: {
                distance: 200,
                duration: 0.4,
                },
            },
            },
            particles: {
            color: {
                value: "#F8F8FF",
            },
            links: {
                color: "#",
                distance: 150,
                enable: false,
                opacity: 0.6,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "out",
                random: false,
                speed: 0.3,
                straight: false,
            },
            number: {
                density: {
                enable: true,
                area: 800,
                },
                value: 500,
            },
            opacity: {
                value: 1,
            },
            shape: {
                type: "circle",
            },
            size: {
                random: true,
                value: 1,
            },
            },
            detectRetina: true,
        }}
        />
        </Box>
    )
}



export default ParticleComponenet