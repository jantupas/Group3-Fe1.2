import React from 'react'
import { Link } from "react-router-dom";

import "./navstyles.css"

function Nav() {
  return (
    <div>
      
        <nav className="nav">

            <div className="left">
                <ul>
                    <li>
                    <Link to="/states" className="link">Member#1</Link>
                    </li>
                    <li>
                    <Link to="/effect" className="link">Member#2</Link>
                    </li>
                    <li>
                        <Link to="/map" className="link">Member#3</Link>
                    </li>
                    <li>
                        <Link to="/viera" className="link">Member#4</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav