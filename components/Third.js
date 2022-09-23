import { motion , useAnimation } from "framer-motion"
import { useEffect } from "react"
import { InView , useInView} from "react-intersection-observer"
import FadeIn from "./FadeIn"

// const squareVariants = {
//     visible: { opacity : 1, color : '#FFFFFF', transition : {duration : .5}   },
//     hidden: { opacity : 0 , color : '#696969'} 
// };

// const videoVariants = {
//     visible: { opacity : 1 , color : '#FFFFFF' },
//     hidden: { opacity : 0 , color : '#696969' , transition : {duration : .5 , ease : 'easeIn'} }
//   };


// const Third = () => {

//     const controls = useAnimation();
//     const [ref, inView] = useInView();
//         useEffect(() => {
//             if (inView) {
//                 controls.start("visible");
//             }
//             }, [controls, inView]);

const data = [
    {id : 1 , heading : 'Supercharged by the Apple M1 Chip.'},
    {id : 2 , heading : '12 MP Ultra Wide front camera with Center Stage.'},
    {id : 3 , heading : 'Blazing fast 5G'},
    {id : 4 , heading : 'Works with Apple Pencil and Magic Keyboard.'},
    {id : 5 , heading : 'Five gerogous colors.'}
]

const Third = () => {
    return (
        <>
        <div className="relative bg-black h-[100vh] text-white flex flex-col justify-center items-center gap-8">

                    {/* <motion.div 
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
                        
                    </motion.div> */}
                    <div className="text-center flex flex-col gap-32 w-4/6 items-center justify-center">
                    {
                        data.map((text) => (
                            <div key={text.id}>
                                <FadeIn 
                                title={text.heading}
                                />
                            </div>
                        ))
                    }
                    </div>

        </div>
        </>
    )
}

export default Third