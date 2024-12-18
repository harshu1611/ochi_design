import React from "react";

function Footer() {
  return (
    <div className="w-full h-screen bg-white p-20 flex">
      <div className="w-1/2 text-zinc-800 ">
        <div className="heading">
          <h1 className="text-[6vw] uppercase leading-none font-foundersGrotesk tracking-tighter">
            Eye-
          </h1>
          <h1 className="text-[6vw] uppercase leading-none font-foundersGrotesk tracking-tighter">
            Opening
          </h1>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="text-[5vw] uppercase leading-none font-foundersGrotesk text-zinc-800 tracking-tighter">
          Presentations
        </h1>
        <div className="details text-zinc-800 mt-10">
          <a href=""  className="block">Facebook</a>
          <a href="" className="block">Instagram</a>
          <a href="" className="block">Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
