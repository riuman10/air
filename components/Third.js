import { motion , useAnimation } from "framer-motion"
import { useEffect } from "react"
import { InView , useInView} from "react-intersection-observer"
import FadeIn from "./FadeIn"


const data = [
    {id : 1 , heading : 'Supercharged by the Apple M1 Chip.'},
    {id : 2 , heading : '12 MP Ultra Wide front camera with Center Stage.'},
    {id : 3 , heading : 'Blazing fast 5G'},
    {id : 4 , heading : 'Works with Apple Pencil and Magic Keyboard.'},
    {id : 5 , heading : 'Five georgous colors.'}
]

const Third = () => {
    return (
        <>
            <div className="relative text-white">
                <div>
                    <video 
                    src='/air.mp4' autoPlay muted loop
                    className="absolute -z-10 bg-blend-darken" 
                    />
                </div>
                <div className="z-[100] container mx-auto text-center flex flex-col pt-10 items-center justify-center gap-y-16">
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