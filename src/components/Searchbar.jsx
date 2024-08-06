import song from "./assets/icons/Song.svg";
import Card from "./card.jsx"
import { IoIosSearch } from "react-icons/io";
import React, { useState, useRef } from 'react'; // Import useRef here

function Searchbar() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (e) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += e.deltaY * 5;
    }
  };

  return (
    <>
      <div className="flex bg-primary w-[70rem] pb-5 flex-col justify-center items-center max-h-[32rem] rounded-lg mx-auto pt-5">
        <div className="flex flex-col w-[100%] px-12">
          <span className="flex w-[100%] mx-auto">
            <input
              type="text"
              className="w-[100%] h-[3rem] rounded-md bg-primary text-slate-500 outline-none border-2 font-medium border-hover2 pl-4 text-xl"
              placeholder="Search..."
            />
          </span>
          <div className="w-full h-[20rem] flex flex-col pt-5 mx-auto">
            <h2 className="text-2xl font-[500]">Recommended Songs</h2>
            <div
              id="scrollbar"
              ref={scrollContainerRef}
              className="grid grid-flow-col overscroll-contain scroll-smooth w-full pb-5 overflow-x-auto gap-4 pt-4 overflow-y-hidden"
              onWheel={handleScroll}
            >
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
