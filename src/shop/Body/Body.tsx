
"use client";
import axios from "axios";
import React, { useState } from "react";
import Card from "./Card";


const Body : React.FC<any> = (_props)=>{

    let [products , setProducts] = useState<any>(null)

    React.useEffect(()=>{
        // let info = axios.get('https://www.fruityvice.com/api/fruit/banana')
        fruitsApi();
    },[])

    let fruitsApi = async () => {
        try{
            let productsApi = await axios.get("https://fakestoreapi.com/products");
            setProducts(productsApi.data)
        }catch(err){

        }
    }

    return(
        <React.Fragment>
                    <section className="text-center my-3 space-y-6 " >
                        <p className="text-3xl"> Welcome To Shop </p>
                        <p className="text-lg  ">Today's offers on our products up to 70%</p>
                    </section>


                    <section>
                        <div className="grid grid-cols-3 p-10 gap-20 " >
                                {
                                   products?.map((e:any,index:Number)=>(<Card info={e} key={index}/>))
                                }
                        </div>
                    </section>

                                                <div className="mt-3">
                                                        <button className="w-full bg-amber-400 " >done</button>
                                                </div>

        </React.Fragment>
    )
} 

export default Body;

