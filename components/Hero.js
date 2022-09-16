import react from "react";
import { useState } from "react";
import { motion , AnimatePresence } from "framer-motion"
import ipad from '../media/ipad.png'
import Image from "next/image";
// import Air from '../media/airh1.mp4'


const Hero = () => {
    return (
        <>
            <div className="relative h-[100vh] bg-black flex justify-center items-center">
                <div>
                    
                </div>
                <div className="w-auto h-auto">
                    <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    onViewportLeave = {{opacity : 0}}
                    viewport={{ once: true }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: 0,
                        repeatDelay: 1
                      }}
                    exit={{ opacity: 0 }}
                >
                    <Image 
                        src={ipad}
                        alt = {'ipad'}
                    />
                    </motion.div>
                    </AnimatePresence>
                    
                </div>
                {/* <source src={Air} type="video/mp4"/> */}
            </div>
        </>
    )
}

export default Hero;