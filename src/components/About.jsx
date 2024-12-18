import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#cdea68] rounded-t-3xl text-black'  data-scroll data-scroll-section data-scroll-speed="1">
        <h1 className='text-[4vw] leading-[4vw] tracking-tight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, voluptatibus eos obcaecati numquam illum possimus maiores eveniet vel cupiditate facilis.</h1>
        <div className='w-full border-t-[1px] border-[#5a6140] mt-20 pt-10 flex gap-5'>
            <div className='w-1/2 '>
            <h1 className='text-4xl'>Our approach"</h1>
            <button className='px-5 py-3 flex gap-10 items-center bg-zinc-900 mt-10 rounded-full text-white'>Read More
                <div className='w-2 h-2 rounded-full bg-white'></div>
            </button>
            </div>
            <div className='w-1/2 h-[70vh] bg-red-600  gap-5 rounded-xl'></div>
        </div>
    </div>
  ) 
}

export default About