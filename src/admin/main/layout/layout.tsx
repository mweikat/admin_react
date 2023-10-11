import { useEffect } from "react";
import { Top } from "../top/top";
import { Link, Outlet } from "react-router-dom";


function Layout(){
    console.log('ejecutar getUser 1');
    useEffect(()=>{
        console.log('ejecutar getUser 2');
    },[]);

    return (
            <>
            <Top></Top>
            <Link to={'/account'}></Link>
            <Outlet></Outlet>
            </>
    )
}

export default Layout;