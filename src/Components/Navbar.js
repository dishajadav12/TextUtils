import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
    <nav className={`navbar navbar-expand-lg border-bottom navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"> <strong> {props.title}</strong></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
         
        </ul>
        <div className={`form-check form-switch`}>
  <input className="form-check-input" type="checkbox" role="switch" aria-checked="false" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btn}</label>
</div>
      </div>  
    </div>
  </nav>
  </div>
  )
}
