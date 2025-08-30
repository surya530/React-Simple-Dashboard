"use client";
import React from "react";
import Header from "./Header";
import Body from "./Body/Body";

const Shop : React.FC<any> = (_props)=>{
    return(
        <React.Fragment>
            <div className="bg-amber-50 min-h-screen min-w--screen">
                <Header />
                <Body />
            </div>
        </React.Fragment>
    )
} 

export default Shop;