import React from "react"
import { createGlobalStyle } from "styled-components"
import logo from "../assets/logo.svg"
import PageLinks from "../constants/links"
import { FaAlignRight } from "react-icons/fa"

const GlobalStyle = createGlobalStyle`
  body {
    color: grey;
    align-content:center;
  }
`


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