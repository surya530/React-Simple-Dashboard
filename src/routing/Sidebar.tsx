


"use client";
import React from "react";
import { FcPrevious } from "react-icons/fc";
import { RiLogoutCircleLine } from "react-icons/ri";
import routeLinks from "./routelinks";
import { useNavigate } from "react-router-dom";
import SidebarNavLink from "../components/SidebarNavLink";

const Sidebar : React.FC<any> = (props)=>{
    
    let navigate = useNavigate();


    return(
        <React.Fragment>
            <div className={`fixed h-screen min-w-56 bg-white dark:bg-slate-600 duration-200 backdrop-filter backdrop-blur-sm ${props.openCloseSidebar ? 'translate-x-0' : '-translate-x-64'}
                                 lg:translate-x-0 lg:static xl:translate-x-0 xl:static 2xl:translate-x-0 2xl:static
                             `} >
                                

                                <div className="flex justify-between p-3 items-center border-b-1 border-b-gray-100 dark:border-b-stone-800 bg-lime-100 dark:bg-slate-600 dark:text-fuchsia-50">
                                    <p className="text-4xl font-bold font-stretch-75%">Logo</p>
                                    <button className="sm:block md:hidden text-2xl font-bold" onClick={()=>{props.setOpenCloseSidebar(false)}}> <FcPrevious />  </button>
                                </div>

                                <div className="mt-4 p-2 h-[calc(100vh-180px)] overflow-scroll">
                                    <div className="overflow-y-auto space-y-2">
                                    {
                                        routeLinks.map((e:any,index:number)=> 
                                            (
                                                <nav className={`flex gap-2 items-center ${window.location.pathname == e.path ? 'bg-gray-300 dark:bg-gray-500' : ''} hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2`} key={index}
                                                onClick={()=>{navigate(e.path);props.setOpenCloseSidebar(false)}}
                                                >
                                                    <SidebarNavLink icon={e.icon} name={e.name} />
                                                </nav>
                                            )    
                                            
                                        )
                                    }
                                    </div>
                                </div>

                                    <div className="mt-2 p-2">
                                        <hr className="text-gray-300 mb-2" />
                                        <button className="flex items-center gap-2 min-w-full p-2 rounded-lg text-xl font-semibold font-stretch-100% dark:bg-gray-500 text-white bg-red-400 hover:bg-white hover:text-black hover:border-2 hover:border-black" onClick={()=>navigate('/')}> <RiLogoutCircleLine />  logout</button>
                                    </div>



            </div>
        </React.Fragment>
    )
} 

export default Sidebar;


