import React, { useState } from 'react';
import song from "./assets/icons/Song.svg";
import Card from "./card.jsx"
import { IoIosSearch } from "react-icons/io";

function Searchbar(){
  const [show, setShow] = useState(true);
    return(
        <>
            <div className='flex bg-primary w-[65rem] flex-col pt-5 h-[26rem] rounded-lg  justify-arround mt-10'>

          <div className='flex justify-evenly w-[100%] align-middle'>
            <a href="#" className={`${!show && 'hidden'}`}>
                        <div className='flex items-center justify-center bg-secondary rounded-md p-[0.8rem] cursor-pointer w-[10em]'>
                            <img src={song} className='w-5' alt="Song" />
                            <p className='text-xl text-center font-medium'>Melove</p>
                        </div>
                    </a>
                    <span className='flex w-[75%] '>
                    <input type="text" className='w-[100%] h-[3rem] rounded-md bg-primary text-slate-500 outline-none border-2 font-medium border-hover2 pl-4 text-xl ' placeholder="Search..."/>
                    </span>
               
                </div>
                
                <div className='w-[100%] h-[15rem] flex flex-col pl-8 pt-5'>
                    <h2 className='text-2xl font-[500]'>
                        Recommended Songs
                    </h2>
                    <div className='flex gap-4 pt-4'>
                        <Card img={``} name="Magnolia" artist="Laufey"/>
                        <Card img={``} name="Magnolia" artist="Laufey"/>
                        <Card img={``} name="Magnolia" artist="Laufey"/>
                        <Card img={``} name="Magnolia" artist="Laufey"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Searchbar