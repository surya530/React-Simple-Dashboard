"use client";
import React from "react";
import { toast } from "react-fox-toast";

import { useNavigate } from "react-router-dom";

let ForgetPassword = ()=>{

    let navigate = useNavigate();
    let [email , setEmail] = React.useState<string>('');

    let submitData = ()=>{
            if(!email){
                toast.error('Please Enter Email', {
                    position : 'top-center',
                    duration : 5000
                })
            }else{
                navigate('/home');                
            }
        }

    return(
            <React.Fragment>
                <div className="flex justify-center items-center min-h-screen bg-amber-200" >
                    <div className="w-96 px-8 py-8 bg-white rounded-2xl shadow-xl">

                            <p className="text-2xl font-semibold font-stretch-100%"> Forget Password </p>
                            <hr  className="mt-1 mb-5" />

                            <section className="space-y-2" >


                                <div className="">
                                    <label className="block text-base mb-1  font-semibold font-stretch-100%">Email</label>
                                    <input type="text" placeholder="Enter email..." 
                                           onChange={(e)=>{setEmail(e.target.value)}}
                                           className="w-full text-base p-2 rounded-md border-1 focus:outline-none focus:ring-0 focus:border-gray-400" />
                                </div>

                                <button className="bg-white border-1 w-full p-2 rounded-md font-semibold font-stretch-100% mt-2 hover:bg-gray-100/80" onClick={()=>{submitData()}} >Submit</button>

                                <p className="my-3 ml-2 text-center font-semibold font-stretch-100% hover:text-blue-600 cursor-pointer" onClick={()=>{navigate("/")}} > Login </p>
                        </section>
                    </div>
                </div>
            </React.Fragment>
    )
}

export default ForgetPassword;
