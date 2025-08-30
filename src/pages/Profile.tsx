

"use client";
import React from "react"


let Profile : React.FC<any> =  (_props)=>{

  return(
    <React.Fragment>
      <p className="text-3xl font-mono font-semibold font-stretch-100% text-center">Profile</p>
        <section className="grid grid-cols-2 gap-x-10 gap-y-3 mt-4" >
          <div >
            <label className="block text-base font-bold font-mono mt-1 text-gray-600 dark:text-gray-300">User Name</label>
            <input type="text" placeholder="username" className="w-full text-base p-2 rounded-md border-1 focus:outline-none focus:ring-0 focus:border-gray-400" />
          </div>
          <div >
            <label className="block text-base font-bold font-mono mt-1 text-gray-600 dark:text-gray-300">Email</label>
            <input type="text" placeholder="Email" className="w-full text-base p-2 rounded-md border-1 focus:outline-none focus:ring-0 focus:border-gray-400" />
          </div>
                    <div >
            <label className="block text-base font-bold font-mono mt-1 text-gray-600 dark:text-gray-300">Age</label>
            <input type="number" placeholder="Age" className="w-full text-base p-2 rounded-md border-1 focus:outline-none focus:ring-0 focus:border-gray-400" />
          </div>

          <div >
            <label className="block text-base font-bold font-mono mt-1 text-gray-600 dark:text-gray-300">Education</label>
            <input type="text" placeholder="Education" className="w-full text-base p-2 rounded-md border-1 focus:outline-none focus:ring-0 focus:border-gray-400" />
          </div>
        </section>
            <div className="mt-2">
              <label className="block text-base font-bold font-mono mt-1 text-gray-600 dark:text-gray-300">Info</label>
              <textarea placeholder="Education" rows={5} className="w-full text-base p-2 rounded-md border-1 focus:outline-none focus:ring-0 focus:border-gray-400"></textarea>
          </div>

              <button className="w-full text-white font-bold rounded mt-2 p-2 bg-sky-600 dark:bg-slate-600 dark:hover:bg-slate-600/80 hover:bg-sky-600/80 " >Save</button>

    </React.Fragment>
  )

}

export default Profile;