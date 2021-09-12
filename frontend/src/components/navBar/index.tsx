import React, { Component } from 'react';
import {Link} from "react-router-dom";

function NavBar(){
  return(
    <div>
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4">
    <div className="container">
	    <nav className="my-2 my-md-0 mr-md-3 bg-light border-bottom shadow-sm">
	    		<Link to="/">
	            <img src="https://raw.githubusercontent.com/devsuperior/sds4/516e3c1b2705ea72587ec19ac30002052dc4d3e2/_assets/ds-dark.svg" alt="DevSuperior" width="120" />
	            </Link>
          </nav>
          </div>
          </div>
    </div>);
}

export default NavBar;
