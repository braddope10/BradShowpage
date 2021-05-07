import React, { Component } from 'react' //imrc shortcut
import { Link } from 'react-router-dom'
import './NavBar.css'
import { MenuItems } from './MenuItems'
import { Button } from '../button/Button'


class NavBar extends Component {

    state = { clicked: false }

    // This handleClick function turns the 'hambuger' menu into an 'x' when clicked on

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <Link to='/'>
                    <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                </Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Link to='/contact'>
                    <Button>Contact Info</Button>
                </Link>
            </nav>
        )
    }
}

export default NavBar