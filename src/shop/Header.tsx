

"use client";
import React from "react";

const Header : React.FC<any> = (_props)=>{
    return(
        <React.Fragment>
                <div className="bg-lime-100 px-4 py-3 flex justify-between items-center" >
                    {/* logo */}

                    <p className="text-4xl font-bold font-stretch-75%" >Logo</p>
                    
                    <nav className="flex gap-4 text-amber-950 font-bold text-lg" >
                            <a>Home</a>
                            <a>Profile</a>
                    </nav>
                </div>
        </React.Fragment>
    )
} 

export default Header;