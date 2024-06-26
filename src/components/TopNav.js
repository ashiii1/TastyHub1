// TopNav.js
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import './TopNav.css'; // Adjust the path as per your project structure
import { Link } from 'react-router-dom';

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="top-nav">
      <div className="logo-container">
        <div onClick={() => setSideNav(!sideNav)} className="menu-icon">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAegZ0eQG0Q1JwaEwpa_fIsuNj0YzgKFN4NA&s"
            alt="Menu"
            className="menu-logo"
          />
        </div>
        <h1 className="title">Tasty<span className="bold">Hub</span></h1>
      </div>

      <nav className={`nav-list ${sideNav ? 'open' : ''}`}>
        <ul className='nav-items'>
          <Link to={"/"}>Home</Link>
         <li ><a href="/mylist">MyList</a></li>
          <Link to={"/about"}>About</Link>
          <Link to={"/account"}>Account</Link>
          <Link to={"/cart"}>Cart</Link>
        </ul>
      </nav>

      <div className={`side-nav ${sideNav ? 'open' : ''}`}>
        <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25} className='close-icon' />
      </div>
    </div>
  );
};

export default TopNav;
