import { Variants } from "framer-motion"



const op:Variants = {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1, 
        transition:{
            duration:0.1,
            delay:0.1,
            ease:[0.6,0.01,0.05,0.95]   
        }
    }

}


export default op