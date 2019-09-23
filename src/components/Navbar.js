import React, {useState} from 'react';
import {Link} from "gatsby";
import "../css/navbar.css";
import { FaBars } from 'react-icons/fa';
import links from '../constants/links';

const Navbar = () => {
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav(isOpen => !isOpen);
  }
    return (
        <nav className="navbar">
          <div className="menu">
            <div className="menu__header">
              <div className="menu__logo">Logo</div>
              <button type="button" className="menu__button" onClick={toggleNav}>
                <FaBars className="menu__icon"/>
              </button>
            </div>

            <ul className={isOpen ? "menu__links menu__links--open" : "menu__links"}>
              {links.map((link, index) => {
                return(
                  <li className="menu__item" key={index}><Link className="menu__link" to={link.path}>{link.name}</Link></li>
                )
              })}
            </ul>

          </div> 
        </nav>
    )
}

export default Navbar
