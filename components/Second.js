import { motion , AnimatePresence } from "framer-motion"
import { useRef, useEffect } from "react"
import { InView , useInView} from "react-intersection-observer"


const Second = () => {
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center bg-black">
                <AnimatePresence>
                    <motion.div 
                    initial = {{opacity : 0}}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false , amount : 1 }}
                    transition = {{
                        duration : 1.5,
                        ease : 'easeOut'
                    }}
                    exit = {{opacity : 0 }}
                    className = 'mt-[-300px]'
                    >
                        <p className="text-8xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 p-2">Light. Bright.</p>
                        <p className="text-8xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 p-2">Full of Might</p>
                    </motion.div>
                </AnimatePresence>
        </div>
    )
}


export default Second