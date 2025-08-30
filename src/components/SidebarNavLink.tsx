
'use client';
import React from "react";

let SidebarNavLink : React.FC<any> = (props)=>{

    return(
        <React.Fragment>
                    <div className="text-2xl" >{props.icon}</div>
                    <div className="text-lg dark:text-white font-semibold" >{props.name}</div>
        </React.Fragment>
    )
}

export default SidebarNavLink;
