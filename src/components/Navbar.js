import React from "react"
import { Link} from 'gatsby'
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  body {
    color: grey;
    align-content:center;
  }
`


const navbar = ()=>{
    return(
    <nav>
        

       <GlobalStyle theme="black"/>
        <ul>
        <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blog/">Blog</Link>
            </li>
            <li>
                <Link to="/about/">About</Link>
            </li>
           
        </ul>
         
        
    </nav>
    )
}
export default navbar