import React from "react";

function Cards() {
  return (
    <div className="w-full flex gap-5 h-screen bg-zinc-100 items-center px-32">
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="card rounded-lg w-full h-full bg-[#004d43] flex items-center justify-center relative">
            <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
            <button className="absolute left-10 bottom-10 px-5 py-1 border-2 border-[#cdea68] rounded-3xl text-[#cdea68]">
                &copy;2019-2022
            </button>
        </div>
      </div>
      <div className="cardContainer flex gap-5 h-[50vh] w-1/2">
        <div className="card rounded-lg w-full h-full bg-[#011c19] flex items-center justify-center relative">
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
            <button className="absolute left-10 bottom-10 px-5 py-1 border-2 border-[#cdea68] rounded-3xl text-[#cdea68]">
                &copy;2019-2022
            </button>
        </div>
        <div className="card rounded-lg w-full h-full bg-[#011c19] flex items-center justify-center relative">
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
            <button className="absolute left-10 bottom-10 px-5 py-1 border-2 border-[#cdea68] rounded-3xl text-[#cdea68]">
                &copy;2019-2022
            </button>
        </div>
      </div>
      
    </div>
  );
}

export default Cards;
