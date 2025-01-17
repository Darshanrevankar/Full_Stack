import React from "react"
import {Link} from "react-router-dom"
import './Nav.css'

 function Nav(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Third Project</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Crypto">Cryptocurrency</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Covid">Covid</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Nasa" >NasaAPI</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login" >Login Form</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        

    )
 }     
    

export default Nav;