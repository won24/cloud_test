import Header from "../component/Header"
import {Outlet} from "react-router-dom"
import Navbar from "../component/Navbar";


const Layout = () =>{

    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout;