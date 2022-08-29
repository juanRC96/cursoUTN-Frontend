import React from "react";
import "../../styles/components/layout/Header.css"
import { Link } from "react-router-dom"

const Header = (props) => {
    return(
        <header>
            <div className="holder">
            <Link to="/"><img src="images/newspaper.png" width="100" alt="TecnoNews"/></Link>
                <h1>TecnoNews</h1>
            </div>
        </header>
    );
}
export default Header;