import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const FadeIn = ({title}) => {
    return (
        <AnimatePresence>
        <motion.div
        initial = {{opacity : 0}}
        whileInView={{ opacity: 1}}
        viewport={{ once: false , amount : 1 }}
        exit = {{opacity : 0 }}
        transition={{
            duration: 1.3,
            ease: "easeInOut",
            // times: [0, 0.2, 0.5, 0.8, 1],
            repeat: 0,
            repeatDelay: 1
        }}
        >
            <p className="text-white text-7xl">{title}</p>
        </motion.div>
        </AnimatePresence>
        
    )
}


export default FadeIn;