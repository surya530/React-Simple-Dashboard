
"use client";
import React from "react";
import { BrowserRouter , Routes , Route }  from "react-router-dom";
import Users from "../pages/Users";

let Login = React.lazy(()=>import("../pages/Login"))
let ForgetPassword = React.lazy(()=>import("../pages/ForgetPassword"))
let Layout = React.lazy(()=>import("./Layout"))
let Home = React.lazy(()=>import('../pages/Home'))

let Profile = React.lazy(()=>import('../pages/Profile'))

let Routing = ()=>{
    return(
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/forget-password" element={<ForgetPassword />} />
                        <Route path="home" element={<Layout />} >
                            <Route path="" element={<Home />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="Users" element={<Users />} />
                        </Route>
                        <Route path="/*" element={<FourNotFour />} />

                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

let FourNotFour = ()=>{
    return(
        <React.Fragment>
        <div className="text-8xl min-h-screen min-w-screen bg-blue-200 flex justify-center items-center font-extrabold font-stretch-90%">
            404 Page Not
        </div> 
    </React.Fragment>
    )
}

export default Routing;
