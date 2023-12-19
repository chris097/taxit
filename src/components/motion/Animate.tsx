import { ReactElement, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface IFrameMotionComponent {
    children: ReactElement
}

export const AnimateSlider: React.FC<IFrameMotionComponent> = ({ children }) => {
    const [ref, inView] = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("hidden")
        } else {
            controls.start("visible")
        }
    }, [controls, inView]);
    
    const animationVariants = {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 0, y: 100 },
    };
    
    return (
            <motion.div
                initial="visible"
                animate={controls}
                variants={animationVariants}
                ref={ref}
                transition={{ type: 'tween', duration: 0.9 }}
            >
                {children}
            </motion.div>
    );
};