import react from "react";
import { useState } from "react";
import { motion , AnimatePresence } from "framer-motion"
import ipad from '../media/ipad.png'
import Image from "next/image";



const Hero = () => {
    return (
        <>
            <div className="relative h-[100vh] bg-black flex justify-center items-center">
                
                <AnimatePresence>
                <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false , amount : 1 }}
                exit={{ opacity: 0 }}
                className="absolute"
                >
                    <video src={"/airh1.mp4"} autoPlay muted playsInline /> 
                </motion.div>
                </AnimatePresence>
                <div className="w-auto h-auto">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false , amount : 1 }}
                        transition={{
                            duration: 1.3,
                            ease: "easeInOut",
                            //times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: 0,
                            repeatDelay: 1
                        }}
                        exit={{ opacity: 0 , duration : 0 }}
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