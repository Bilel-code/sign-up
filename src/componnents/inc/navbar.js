import React from "react";
import logo from "../images/Algerie_Telecom.svg.png";

function Navbar(){
return (
        <div> 
            <header>
  <img src={logo} alt="Logo" />
  <h1>Sign Up</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
            </div>
);

}

export default Navbar;