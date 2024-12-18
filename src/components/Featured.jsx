import { motion } from "framer-motion";
import { Power4 } from "gsap";
import React, { useState } from "react";

function Featured() {
    const [hover,setHover]=useState(0)
    const handleHover=()=>{

    }
      return (
    <div className="w-full py-10">
      <div className="w-full px-20 text-black border-b-[1px] border-zinc-700 py-20">
        <h1 className="text-6xl tracking-tight">Featured projects</h1>
      </div>
      <div>
        <div className="cards w-full flex gap-10 mt-10 px-20">
          <div className="cardcontainer relative w-1/2  h-[75vh]" onMouseEnter={()=>setHover(1)} onMouseLeave={()=>setHover(0)}>
            <h1 className="absolute text-[#cdea68] left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-9xl tracking-tighter leading-none overflow-hidden flex font-bold">
            {"FYDE".split("").map((item, index) => {
                return <motion.span className="inline-block" initial={{y:"100%"}} animate={hover===1?{y:"0"}:''} transition={{ease:Power4.easeInOut, delay:index*0.06}}>{item}</motion.span>;
              })}
            </h1>
            <div className="card w-full h-full rounded-xl bg-green-400 overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2  h-[75vh]" onMouseEnter={()=>setHover(2)} onMouseLeave={()=>setHover(0)}>
            <h1 className="absolute text-[#cdea68] right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9px] text-9xl tracking-tighter leading-none flex overflow-hidden font-bold">
            {"VISE".split("").map((item, index) => {
                return <motion.span className="inline-block" initial={{y:"100%"}} animate={hover===2?{y:"0"}:''} transition={{ease:Power4.easeInOut, delay:index*0.06}}>{item}</motion.span>;
              })}
            </h1>
            <div className="card w-full h-full rounded-xl bg-green-400 overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
