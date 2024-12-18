import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
  return (
    <div className='w-full h-[50vh] bg-[#004d43] py-20 rounded-t-3xl' data-scroll data-scroll-section data-scroll-speed="-.5">
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:5}} className='uppercase text-[13vw] font-foundersGrotesk font-semibold -mb-[4vw] pr-10'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:5}} className='uppercase text-[13vw] font-foundersGrotesk font-semibold -mb-[4vw] pr-10'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:5}} className='uppercase text-[13vw] font-foundersGrotesk font-semibold -mb-[4vw] pr-10'>We are ochi</motion.h1>

        </div>
    </div>
  )
}

export default Marquee