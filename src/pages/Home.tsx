"use client";
import React from "react";
import Card from "../components/Card";



interface User {
  name : string;
  age : number;
  specialization : string;
  education : string;
  info : string
}


let data : User[] = [
  {
    "name": "Emily Chen",
    "age": 27,
    "specialization": "Data Scientist",
    "education": "Master's degree in Computer Science",
    "info": "Lives in New York, loves hiking and trying new cuisines"
  },
  {
    "name": "Liam Patel",
    "age": 32,
    "specialization": "Software Engineer",
    "education": "Bachelor's degree in Information Technology",
    "info": "From Mumbai, India, and enjoys playing cricket in his free time"
  },
  {
    "name": "Ava Lee",
    "age": 25,
    "specialization": "UX Designer",
    "education": "Bachelor's degree in Fine Arts",
    "info": "Based in San Francisco, and loves attending music festivals"
  },
  {
    "name": "Ethan Kim",
    "age": 29,
    "specialization": "Product Manager",
    "education": "MBA from Harvard University",
    "info": "Originally from Seoul, South Korea, and enjoys playing golf"
  },
  {
    "name": "Sophia Rodriguez",
    "age": 24,
    "specialization": "Marketing Specialist",
    "education": "Bachelor's degree in Business Administration",
    "info": "From Miami, Florida, and loves trying new restaurants and traveling"
  }
]


let Home : React.FC<any> =  (_props)=>{

  return(
    <React.Fragment>
      <p className="text-3xl font-mono font-semibold font-stretch-100% text-center mt-1 mb-3">Home</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2">
        {
          data.map((e : User , _index : number)=> <Card info={e} /> )
        }
      </div>

    </React.Fragment>
  )

}

export default Home;