import { motion , useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"
import { InView , useInView} from "react-intersection-observer"

const squareVariants = {
    visible: { opacity : 1, transition: { duration: 5 } , color : '#AA4A44'  },
    hidden: { opacity : 0.3 , color : '#696969' , transition : {duration : .5 , ease : 'easeIn'} }
  };


const Third = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView();
        useEffect(() => {
            if (inView) {
                controls.start("visible");
            }
            }, [controls, inView]);


    return (
        <>
        <div className="bg-black h-[100vh] text-white flex flex-col justify-center items-center gap-6">
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
                        ease : 'easeIn',
                    }}
                    variants = {squareVariants}
                    className = 'w-[70vw] flex flex-col items-center'
                    >
                    <p className="text-8xl font-medium">Light. Bright.</p>
                    <p className="text-8xl font-medium">Light. Bright.</p>
                    <p className="text-8xl font-medium">Light. Bright.</p>
                    <p className="text-8xl font-medium">Light. Bright.</p>
                    <p className="text-8xl font-medium">Light. Bright.</p>
                    <p className="text-8xl font-medium">Light. Bright.</p> 
                    </motion.div>  
        </div>
        </>
    )
}

export default Third