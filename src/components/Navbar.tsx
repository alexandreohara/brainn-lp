import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import barsIcon from '../assets/icons/menu.png';

export const Navbar = () => {
  const [menuClick, setMenuClick] = useState(false);

  const handleMenuClick = () => setMenuClick(!menuClick);
  const closeMobileMenu = () => setMenuClick(false);

  return (
    <>
      <nav className={'navbar'}>
        <div className={'navbar-container'}>
          <img
            src={barsIcon}
            alt={'bars-icon'}
            className={'bars-icon'}
            onClick={handleMenuClick}
          />
          <Link to={'/'} className={'navbar-logo'}>
            brainn.co
          </Link>
          <ul className={menuClick ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
                to={'/services'}
                className={'nav-links'}
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={'/about-us'}
                className={'nav-links'}
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
