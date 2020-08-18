import React, { Component } from 'react';
import HeaderStyle from '../Styles/HeaderStyle.css';

// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      <div>
          <nav className="navBar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="https://www.linkedin.com/in/tomasz-nawrocki-bab14218b/" target="_blank"><FontAwesomeIcon icon={faHome} /></a></li>
                    <li><a href="https://github.com/NavroO" target="_blank"><FontAwesomeIcon icon={faHome} /></a></li>
        
                </ul>
            </nav>
      </div>
    );
  }
}

export default Header;
