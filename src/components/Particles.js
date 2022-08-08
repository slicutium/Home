import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
//import { loadFull } from "tsparticles";
import {useCallback, useMemo} from "react";

const ParticlesComponent = () => {
    //using useMemo is not mandatory, but it is recommended since this value can be memoized if static
    const options = useMemo(()=>{
        //using an empty options object will load the default options,
        //which are static particles with no background and 3px radius
        //opacity 100%, white color
        return {
            background: {
                color: "#000", // this sets a background color for the canvas
            },
            fullScreen:{
                enable: true, //enabling this will make the canvas fill the entire screen, its enabled by default
                zIndex: -1, // this is the z-index value used when the fullscreen is enabled, its 0 by default
            },
            interactivity:{
                events: {
                    onClick: {
                        enable: true, //enables the click event
                        mode: "push", //adds the particle on click
                    },
                    onHover: {
                        enable: true, //enables the hover event
                        mode: "repulse", // make  the particles run away from the cursor
                    }
                },
                modes: {
                    push: {
                        quantity: 10, // number of particles to add on click
                    },
                    repulse: {
                        distance: 100 // distance of the particles from the cursor
                        // radius: 10, // the distance from the cursor to repulse
                    }
                }
            },
            particles: {
                links: {
                    enable: true, //enabling this will make particles linked together
                    speed: {min: .1, max: 1},
                    distance: 80, // max distance for linking the particles
                },
                move: {
                    enable: true, //enabling this will make the particles move in the canvas
                },
                opacity: {
                    value: {min: 0.3, max: 0.7} // allows changing alpha
                },
                size: {
                    value: { min:1, max: 3} //lets randomize the particle's size
                },
            },
        };
    },[]);

    //sueCallback is not mandatory, byt it is recommended since this callback can be memoized if static.
    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
        //loadFull(engine); // for this sample the slim version is enogh, choose whatever you prefer, slim is smaller in size but does not have all the plugins and the mouse trail  feature
    },[]);

    return <Particles init={particlesInit} options ={options} />;
}

export default ParticlesComponent;