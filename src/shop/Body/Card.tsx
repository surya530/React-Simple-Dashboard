
"use Client";
import React from "react";

let Card : React.FC<any> = (props)=>{

    let {title  , image , price ,  rating} = props.info;



    return(
        <React.Fragment>
            
                <div className="max-w-sm rounded overflow-hidden shadow-lg p-4" >
                    <img src={image} className="w-full" />

                    <div className="p-2 font-bold text-lg">
                            {title}
                    </div>

                    <div className="flex justify-between px-6 items-center">
                        <p>Price : { price }</p>
                        <span className="rounded-lg px-2 py-0.5 bg-gray-300">  {rating.rate} Stars</span>
                    </div>
                </div>



        </React.Fragment>
    )
}

export default Card;
