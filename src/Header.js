import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      {/* Logo */}
      <Link to="">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="header-logo"
        />
      </Link>

      {/* Search Box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header__nav">
        {/* link 1 */}
        <Link to='/login' className="header__link">
          <div className="header__option">
            <span className='header__option__lineOne'>Hello Temmy</span>
            <span className='header__option__lineTwo'>Sign In</span>
          </div>
        </Link>
        {/* Link 2 */}
        <Link to='/' className="header__link">
          <div className="header__option">
            <span className='header__option__lineOne'>Returns</span>
            <span className='header__option__lineTwo'>& Orders</span>
          </div>
        </Link>
        {/* Link 3 */}
        <Link to='/' className="header__link">
          <div className="header__option">
            <span className='header__option__lineOne'>Your</span>
            <span className='header__option__lineTwo'>Prime</span>
          </div>
        </Link>
      </div>

      {/* Basket Icon with number */}
    </nav>
  );
}

export default Header;
