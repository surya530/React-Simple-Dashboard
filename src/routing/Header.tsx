

"use client";
import React from "react";
import { FcMenu } from "react-icons/fc";
import { Outlet } from "react-router-dom";
// import { PiSunDimFill } from "react-icons/pi";
// import { IoIosMoon } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { FcPortraitMode } from "react-icons/fc";
import { FcNightPortrait } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";

const Header : React.FC<any> = (props)=>{

    let navigate = useNavigate();

    return(
        <React.Fragment>
                        {/* Overlay (only visible when sidebar is open on mobile) */}

            <main className="flex-1">
                <header className=" bg-lime-100 px-4 py-2 flex justify-between md:justify-end items-center shadow-xl dark:bg-slate-600" >
                    {/* logo */}

                    <button className="text-3xl sm:block md:hidden" onClick={()=>{ props.setOpenCloseSidebar(true) }} > <FcMenu /> </button>

                    <p className="text-4xl font-bold font-stretch-75% md:hidden sm:block dark:text-fuchsia-50" >Logo</p>
                    
                    <nav className="flex items-center gap-4 text-amber-950 dark:text-fuchsia-50 font-bold text-lg cursor-pointer">
                            <div onClick={()=>props.setDarkMode(!props.darkMode)} > 
                            
                                {/* {props.darkMode ? <PiSunDimFill className="text-orange-400 text-4xl" /> : <IoIosMoon className="text-4xl"  /> } */}
                                

                                   {props.darkMode ? <FcPortraitMode className="text-5xl" /> : <FcNightPortrait className="text-5xl"  /> }
                            </div>
                            <div className="w-10 h-10 bg-pink-100 rounded-4xl flex items-center justify-center" title="Profile" onClick={()=>{navigate('/home/profile')}} ><FcBusinesswoman className="text-3xl" /></div>
                    </nav>
                </header>

                <div className=" dark:bg-zinc-500 h-[calc(100vh-65px)]" >
                    <section className="p-6 dark:text-white">
                        <Outlet />
                    </section>
                </div>

            </main>
        </React.Fragment>
    )
} 

export default Header;