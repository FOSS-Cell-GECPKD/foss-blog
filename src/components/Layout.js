import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
    align-content:center;
  }
`
const layout =({children}) =>{

    return(
    

    
    <>
    <Navbar/>
  
        <main>
            {children}
            <GlobalStyle theme="purple" />
        </main>
      <Footer/>
    </>
    )
}
export default layout