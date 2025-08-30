// // import { useState } from 'react'
// // import './App.css'

import React from "react";
import Shop from "./shop/Shop";
import Header from "./routing/Header";
import Sidebar from "./routing/Sidebar";
import Routing from "./routing/Routing";

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>

//       {/* navbar */}

//         <div className="bg-orange-400 p-4 flex justify-between items-center hover:bg-orange-400/90 ">
//             <div>
//               {/* logo */}
//               <p className="text-white text-3xl font-bold"> Hero </p>
//             </div>

//             {/* navlinks */}
//             <nav  className="flex gap-4 font-medium text-black" >
//               <a>Home</a>
//               <a>Settings</a>
//               <a>Profile</a>
//             </nav>


//         </div>

//       {/* body */}

//           <div>

//                 <section className="my-7 text-center flex flex-col gap-4">
//                   <div className="text-5xl font-stretch-50%"> Welcome to Fruits Shop </div>
//                   <p className="text-xl">Today Offers up to 70 % </p>
//                 </section>



//                 <section>
//                   <div className="grid grid-cols-6 gap-2 px-4">
//                         <div className="bg-green-300 p-2 hover:bg-green-300/80">1</div>
//                         <div className="bg-green-300 p-2  hover:bg-green-300/80">2</div>
//                         <div className="bg-green-300 p-2  hover:bg-green-300/80">3</div>
//                         <div className="bg-green-300 p-2  hover:bg-green-300/80">4</div>
//                         <div className="bg-green-300 p-2  hover:bg-green-300/80">5</div>
//                         <div className="bg-green-300 p-2  hover:bg-green-300/80">6</div>
//                         <div className="bg-green-300 p-2  hover:bg-green-300/80">7</div>
//                         <div className="bg-green-300 p-2  hover:bg-green-300/80">8</div>

//                                                 <div className="bg-green-300 p-2  hover:bg-green-300/80">9</div>
//                         <div className="bg-green-300 p-2  hover:bg-green-300/80">10</div>
//                         <div className="bg-green-300 p-2  hover:bg-green-300/80">11</div>

//                                                 <div className="bg-green-300 p-2  hover:bg-green-300/80">12</div>
//                         <div className="bg-green-300 p-2  hover:bg-green-300/80">13</div>
//                         <div className="bg-green-300 p-2  hover:bg-green-300/80">14</div>

//                                                 <div className="bg-green-300 p-1 hover:bg-green-300/80">
//                                                   <img className="w-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthfvnext.bing.com%2Fth%2Fid%2FOIP.huwrgSOlIniXrXk8ZWOoTQHaE8%3Fcb%3Dthfvnext%26pid%3DApi&f=1&ipt=28f095efe8389beddb37fbe2096e5218ffc96c703952f74bcc8f011dc1c9df0b" alt="" />
                                                  
//                                                   <div className="px-4 py-2">
//                                                     <div className="font-semibold text-2xl mb-2" >Banana</div>
//                                                     <div className="text-lg" >containes vitime d and calsame</div>
//                                                   </div>

//                                                   <div className="px-4 py-2">
//                                                         <span className="mx-2 bg-gray-200 py-1 px-4 rounded-xl">1kg</span>
//                                                         <span className="mx-2 bg-gray-200 py-1 px-4 rounded-xl">2kg</span>
//                                                   </div>


//                                                 </div>

//                   </div>
//                 </section>



//           </div>



//       {/* footer */}

//     </>
//   )
// }

// export default App



let App : React.FC<any> =  (_props)=>{



  return(
    <React.Fragment>

          <Routing />

    </React.Fragment>
  )

}

export default App;


    //       <div className="flex flex-col min-h-screen">
    //   {/* Header */}
    //   <header className="bg-blue-600 text-white p-4">
    //     Header
    //   </header>

    //   {/* Content Area */}
    //   <div className="flex flex-1">
    //     {/* Sidebar */}
    //     <aside className="w-64 bg-gray-200 p-4 hidden md:block">
    //       Sidebar
    //     </aside>

    //     {/* Main Content */}
    //     <main className="flex-1 bg-white p-6">
    //       Main Content
    //     </main>
    //   </div>

    //   {/* Footer */}
    //   <footer className="bg-blue-600 text-white p-4 text-center">
    //     Footer
    //   </footer>
    // </div>