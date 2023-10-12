import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer"

export default function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}