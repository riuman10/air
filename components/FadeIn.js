import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const FadeVarients = {
    visible : {opacity : 1 , transition : { duration : 1 , delay : 0.3,  repeatType : 'loop' } , ease : 'easeOut'},
    hidden : {opacity : 0 }
}

const FadeIn = ({title}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <motion.div
        ref={ref}
        animate={controls}
        variants = {FadeVarients}
        style = 'style'
        initial="hidden"
        >
            <p className="text-white text-7xl">{title}</p>
        </motion.div>
    )
}


export default FadeIn;