import { motion , useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"
import { InView , useInView} from "react-intersection-observer"

const squareVariants = {
    visible: { opacity : 1, transition: { duration: 3 } , color : '#FFFFFF'  },
    hidden: { opacity : 0 , color : '#696969' , transition : {duration : .5 , ease : 'easeIn'} }
  };

const videoVariants = {
    visible: { opacity : 1 , color : '#FFFFFF'  },
    hidden: { opacity : 0 , color : '#696969' , transition : {duration : .5 , ease : 'easeIn'} }
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
        <div className="relative bg-black h-[100vh] text-white flex flex-col justify-center items-center gap-8">
                    <motion.div 
                    ref = {ref}
                    initial = {{opacity : .3}}
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
                    className = 'w-[70vw] flex flex-col items-center text-center z-50'
                    >
                    <p className="text-7xl font-medium">Supercharged by the Apple M1 chip</p>
                    <p className="text-7xl font-medium">12MP Ultra Wide front camera with Center Stage.</p>
                    <p className="text-7xl font-medium">Blazing Fast 5G</p>
                    <p className="text-7xl font-medium">Works with Magic Keyboard and Apple Pencil</p>
                    <p className="text-7xl font-medium">Five Gorgeous Colors</p>
                    </motion.div>  
                    <motion.div 
                        ref = {ref} 
                        initial = {{opacity : .1}} 
                        animate = {controls} 
                        variants = {videoVariants} 
                        className="absolute z-0"
                    >
                        <video src="/air.mp4" autoPlay loop muted playsInline  />
                        
                    </motion.div>
        </div>
        </>
    )
}

export default Third