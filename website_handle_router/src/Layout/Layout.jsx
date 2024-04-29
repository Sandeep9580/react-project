import React from "react";
import Header from "../assets/componenets/Header/Header";
import Footer from "../assets/componenets/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout