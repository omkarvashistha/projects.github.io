import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { animate , inView, stagger } from 'motion';

initScrollReveal(targetElements, defaultProps);
initTiltEffect();


inView('.timeline',target => {
    animate('.timeline-item',
        {
            opacity : [0,1],
            height : ['0' , '230px']
        },
        {
            delay : stagger(0.6),
            easing : "ease-in",
            duration : 1
        }
    );
})



