import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">
                    <h3>About Me</h3>
                </Link>

                <ul className="nav-links">
                    <Link to="/projects">
                        <li>Projects</li>
                    </Link>

                    <Link to="/technologies">
                        <li>Technologies</li>
                    </Link>

                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>

                    <Link to="/messageboard">
                        <li>Messages Board</li>
                    </Link>

                </ul>
            </nav>
        )
    }
}

export default NavBar