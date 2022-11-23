import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <div>
        <h1>My Links</h1>
        <div>
            <Link className="mygap" to="/">Login</Link> 
            <Link className="mygap" to="/dashboard">Dashboard</Link> 
            <Link className="mygap" to="/aboutus">Aboutus</Link> 
        </div>
    </div>
  )
}
