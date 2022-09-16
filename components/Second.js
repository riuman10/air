import { motion , useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"
import { InView , useInView} from "react-intersection-observer"

const squareVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 }
  };

const Second = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
        useEffect(() => {
            if (inView) {
                controls.start("visible");
            }
            }, [controls, inView]);
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center bg-black">
                    <motion.div 
                    ref = {ref}
                    initial = {{opacity : 0}}
                    animate = {controls}
                    // initial = {{y : 50}}
                    // whileInView= {{y : 0}}
                    // onViewportLeave = {{opacity : .5}}
                    // viewport={{ once: true }}
                    transition = {{
                        duration : .1,
                        ease : 'easeIn'
                    }}
                    variants = {squareVariants}
                    >
                        <p className="text-8xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 p-2">Light. Bright.</p>
                        <p className="text-8xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 p-2">Full of Might</p>
                    </motion.div>
        </div>
    )
}


export default Second