import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"

const Navbar =()=>{
    const [show,setShow] = useState(false);
const nav=()=>
{
    setShow(!show);
}



    return(
        <>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container">
    <a href="/" className="brand2"><i className="fab fa-angellist"></i> DingDong Food App</a>
    <button onClick={nav} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : "" }`} >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  exact className="nav-link z" to="/" activeClassName="active1">
            Home
         </NavLink>
        </li>
        <li className="nav-item" >
        <NavLink exact className="nav-link z" to="/about" activeClassName="active1">
            About
         </NavLink>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
        
        
        
        </>
    )
}

export default Navbar;