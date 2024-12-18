import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
    
  return (
    <div className="w-full h-screen bg-white text-zinc-800 pt-1" data-scroll data-scroll-section data-scroll-speed="-1">
      <div className="text-structure mt-32 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index===1 && <motion.div initial={{width:0}} whileInView={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1], duration:1}} className="mr-[1vw] w-[7vw] h-[5vw] rounded-md bg-red-500 relative -top-[0.4vw]"></motion.div>}
                <h1
                  className="pt-[2vw] -mb-[1vw] uppercase text-[7vw] tracking-tighter leading-[5vw] font-foundersGrotesk"
                  key={index}
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-3">
          <div className="px-4 py-2 border-[1px] border-zinc-700 rounded-full font-light uppercase text-md">
            Start the project
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-700 flex items-center justify-center">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
