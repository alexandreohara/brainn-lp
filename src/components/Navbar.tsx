import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../assets/icons/menu.png';

export const Navbar = () => {
  const [menuClick, setMenuClick] = useState(false);

  const handleMenuClick = () => setMenuClick(!menuClick);
  return (
    <>
      <nav className={'navbar'}>
        <div className={'navbar-container'}>
          <span className={'bars-icon'} onClick={handleMenuClick}>
            <img
              src={menuIcon}
              alt={'menu-icon'}
              style={{
                width: '30px',
                padding: '10px',
                float: 'left',
              }}
            />
          </span>
          <Link to={'/'} className={'navbar-logo'}>
            brainn.co
          </Link>
          <ul className={menuClick ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to={'/services'} className={'nav-links'}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/about-us'} className={'nav-links'}>
                About us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
