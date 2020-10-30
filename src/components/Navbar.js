import React from "react"
import { Link} from 'gatsby'



const navbar = ()=>{
    return(
    <nav>
        <ul>
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