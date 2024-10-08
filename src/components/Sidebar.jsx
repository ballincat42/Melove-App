import React, { useState } from 'react';
import hamburger from './assets/icons/Hamburger.svg';
import song from "./assets/icons/Song.svg";
import Home from './assets/icons/Home.svg';
import Library from './assets/icons/Library.svg';
import Compass from './assets/icons/Compass.svg';
import Add2 from './assets/icons/Add2.svg'
import x from './assets/icons/x.svg'

function Sidebar() {
    const [show, setShow] = useState(true);

    // Navigation items
    const navs = [
        { id: 0, icon: Home, title: 'Home' },
        { id: 1, icon: Library, title: 'Library' },
        { id: 2, icon: Compass, title: 'Compass' }
    ];

    return (
        <aside className={`h-screen ${show ? 'w-72' : 'w-20'} z-10 bg-primary flex transition-all ${!show? 'duration-00':'duration-150'} `}>
            <div className={`h-screen ${show ? 'w-[100%]' : ''} flex flex-col p-5 pt-8`}>

                {/* Header with hamburger button and logo */}
                <div className='flex gap-8 justify-between duration-300'>
                    <button className={`h-[53.59px] duration-150`} onClick={() => setShow(!show)}>
                        <img src={`${!show ? hamburger : x}`} className='w-9 duration-150' alt="Hamburger" />
                    </button>

                    {/* Logo */}
                    <a href="#" className={`${!show && 'hidden'}`}>
                        <div className='flex items-center justify-center bg-secondary rounded-md p-[0.8rem] cursor-pointer w-[10em] mr-5'>
                            <img src={song} className='w-5' alt="Song" />
                            <p className='text-xl text-center font-medium'>Melove</p>
                        </div>
                    </a>
                </div>
                {/* a break line */}
                <div className='w-[100%] bg-hover h-1 rounded-md mt-5'></div>

                {/* Navigation items */}
                <ul className='pt-2 '>
                    {navs.map((nav) => (
                        <li 
                            key={nav.id} 
                            className={`duration-150 font-medium gap-4 my-2 ${show ? 'p-4' : 'p-2'} flex items-center hover:bg-hover rounded-lg cursor-pointer ${nav.id === 0 ? 'bg-hover' : ''} ${nav.id === 0 ? 'hover:bg-hover2' : ''}`}>
                            <img src={nav.icon} className='w-6 h-6 flex-none' alt={nav.title} />
                            <span className={`text-base font-medium flex-1 ${!show && 'hidden'}`}>{nav.title}</span>
                        </li>
                    ))}
                </ul>
                {/* a break line */}
                <div className='w-[100%] bg-hover h-1 rounded-md'></div>

                <button className={`flex items-center justify-center mt-5 bg-hover rounded-md gap-2 text-md font-medium ${!show && 'hidden'} py-2 hover:bg-hover2 duration-150`}><img src={Add2} alt="" /> New Playlist</button>

       
            </div>
        </aside>
    );
}

export default Sidebar;
