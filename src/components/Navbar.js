import React, {useState} from 'react';
import {Link} from "gatsby";
import "../css/navbar.css";
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
              <Link to='/' className="menu__logo">Logo</Link>
              <button type="button" className={isOpen ? "menu__hamburger menu__hamburger--open" : "menu__hamburger"} onClick={toggleNav}>
                <span className="hamburger__box">
                  <span className="hamburger__inner"></span>
                </span>
              </button>
            </div>

            <ul className={isOpen ? "menu__links menu__links--open" : "menu__links"}>
              {links.map((link, index) => {
                return(
                  <li className="menu__item" key={index}><Link className="menu__link" activeClassName="menu__link--active" to={link.path}>
                  {link.name}
                  </Link></li>
                )
              })}
            </ul>

            <ul className={isOpen ? "select-language select-language--open": "select-language"}>
                <Link className="language-option" to="/" >pl</Link>
                <Link className="language-option" to="/en">en</Link>
            </ul>

          </div> 
        </nav>
    )
}

export default Navbar
