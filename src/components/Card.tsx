
"use client";
import React from "react";

import { FaBabyCarriage } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoIosBody } from "react-icons/io";


interface User {
    info : {
        name : string;
        age : number;
        specialization : string;
        education : string;
        info : string
    }
}


let Card : React.FC<User> = (props)=>{
    

    return(
        <React.Fragment>
            <section className="w-full dark:bg-gray-600 bg-stone-300 px-3 py-3 rounded-xl mb-2 shadow-md" >
                <div className="dark:text-sky-100 text-lg font-semibold text-black"> { props.info.name } </div>
                <div className="flex flex-row items-center gap-2" > <FaBabyCarriage /> : {props.info.age} </div>
                <div className="flex flex-row items-center gap-2" > <IoIosBody /> :  {props.info.specialization} </div>
                <div className="flex flex-row items-center gap-2" > <MdCastForEducation /> :   {props.info.education} </div>
            </section>
        </React.Fragment>
    )
}

export default Card;



/*

    Create randam json data array
    with name , age , spelization , education , some info abgot person

*/
