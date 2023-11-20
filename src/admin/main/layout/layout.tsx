import { Outlet } from "react-router-dom";
import { Top } from "../top/top";
//import { SideBar } from "../sideBar/sideBar";
import Loader from "../../../commons/loader/loader";
import { useEffect, useState } from "react";


function Layout(){

    const [loading, setloading] = useState(false);

    useEffect(()=>{
        setloading(true);
        setTimeout(() => {
          setloading(false);
        }, 1000);
    
      },[])

    return (
            <>
            <header>
                <Top></Top>
                {/*<SideBar></SideBar>*/}
            </header>

            <main style={{marginTop: '58px'}}>
                <div className="container pt-4">
                {loading?<Loader/>:<Outlet/>}
                </div>
            </main>
            </>
    )
}

export default Layout;