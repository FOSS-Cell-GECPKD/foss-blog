import React from "react"
import logo from "../assets/logo.svg"
import PageLinks from "../constants/links"
import { FaAlignRight } from "react-icons/fa"



const navbar = ()=>{
    return(
    <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} alt="logo"/>
                <button type="button" className="toggle-btn">
                <FaAlignRight></FaAlignRight>
                </button>

            </div>
            <PageLinks styleClass="nav-links"></PageLinks>
        </div >
        

       
        
    </nav>
    )
}
export default navbar