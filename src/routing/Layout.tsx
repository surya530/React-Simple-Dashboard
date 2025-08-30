import React from "react";
import Header from "../routing/Header";
import Sidebar from "../routing/Sidebar";



let Layout : React.FC<any> =  (_props)=>{

  let [openCloseSidebar , setOpenCloseSidebar] = React.useState(false);
  let [darkMode , setDarkMode ] = React.useState(false);

  return(
    <React.Fragment>
        <div className={`flex h-screen bg-gray-200 ${darkMode ? "dark" : ''} `}>
          <Sidebar openCloseSidebar={openCloseSidebar} setOpenCloseSidebar={setOpenCloseSidebar} setDarkMode={setDarkMode} darkMode={darkMode} />

          {
            !openCloseSidebar &&
                  <Header setOpenCloseSidebar={setOpenCloseSidebar} openCloseSidebar={openCloseSidebar} setDarkMode={setDarkMode} darkMode={darkMode} />
          }

          {
            openCloseSidebar &&
            <div className="flex-1"
            onClick={()=>{setOpenCloseSidebar(false)}}> </div>
          }

      </div>
    </React.Fragment>
  )

}

export default Layout;

