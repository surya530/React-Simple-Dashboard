

"use client";
import React from "react";
import Card from "../components/Card";

// import { fetchUserData } from "../reducers/userSlice";


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





let Users : React.FC<any> =  (_props)=>{

  return(
    <React.Fragment>

                    <p className="text-3xl font-mono font-semibold font-stretch-100% text-center mt-1 mb-3">Users</p>
        
      <table
          className="min-w-full text-left text-sm font-light text-surface dark:text-white border-1">
          <thead
            className="border-b border-black text-sm dark:border-white">
            <tr>
              {/* <th scope="col" className="px-6 py-4">#</th> */}
              <th scope="col" className="px-6 py-4"> Name </th>
              <th scope="col" className="px-6 py-4"> Age </th>
              <th scope="col" className="px-6 py-4"> Education </th>
              <th scope="col" className="px-6 py-4"> Specialization </th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((e,_index)=>
                            <tr className="border-b border-black dark:border-white">
              <td className="whitespace-nowrap px-6 py-4">{e.name}</td>
              <td className="whitespace-nowrap px-6 py-4">{e.age}</td>
                            <td className="whitespace-nowrap px-6 py-4">{e.education}</td>
              <td className="whitespace-nowrap px-6 py-4">{e.specialization}</td>
            </tr>
              )
            }

          </tbody>
        </table>
      
      {/* {
        data.map((e : User , _index : number)=> <Card info={e} /> )
      } */}
    </React.Fragment>
  )

}

export default Users;