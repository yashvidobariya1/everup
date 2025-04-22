// import React, { useState, useEffect } from 'react';
// import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
// import { GrFormClose } from 'react-icons/gr';
// import { HiMenu } from 'react-icons/hi';
// import "../Main/Header.css"
// import { GoSun, GoMoon } from "react-icons/go";

// const Header = () => {
//   const [navbarActive, setNavbarActive] = useState(false);
//   const [headerClass, setHeaderClass] = useState('header');
//   const location = useLocation();
//   const [activeLink, setActiveLink] = useState(location.pathname);
//   const navigate = useNavigate();
//   const [darkTheme, setDarkTheme] = useState(false);

//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location]);

//   const showNavbar = () => {
//     setNavbarActive(true);
//   };

//   const removeNavbar = () => {
//     setNavbarActive(false);
//   };

//   const handleScroll = () => {
//     if (window.scrollY >= 10) {
//       setHeaderClass('header activeheader');
//     } else {
//       setHeaderClass('header');
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const isActive = (path) => {
//     if (location.pathname === path) return true;
//     if (path === '/services' && location.pathname.includes('/services/servicedetails')) return true;
//     if (path === '/' && location.pathname.includes('/home/details')) return true;
//     if (path === '/' && location.pathname.includes('/condition')) return true;
//     if (path === '/' && location.pathname.includes('/privacy')) return true;
//     return false;
//   };

//   const handlehome = () => {
//     navigate('/');
//   }

//   const toggleDarkTheme = () => {
//     setDarkTheme(prev => {
//       const newTheme = !prev;
//       if (newTheme) {
//         document.body.classList.add('dark-theme');
//         localStorage.setItem('theme', 'dark');
//       } else {
//         document.body.classList.remove('dark-theme');
//         localStorage.setItem('theme', 'light');
//       }
//       return newTheme;
//     });
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       document.body.classList.add('dark-theme');
//       setDarkTheme(true);
//     }
//   }, []);

//   return (
//     <div className='header-container'>
//       <div className={headerClass}>
//         <div className='upper-header'>
//           <div className='logo'>
//             <img src='/Images/everupicon.png' alt='header-everup' aria-hidden='true' style={{ width: 100 }} onClick={handlehome} />
//           </div>
//         </div>

//         <div className='main-header'>
//           <div className={`left ${navbarActive ? 'activeleft' : ''}`}>
//             <Link
//               to="/home"
//               onClick={removeNavbar}
//               className={isActive('/home') ? 'active' : ''}
//             >
//               Home
//             </Link>
//             <Link
//               to="/cashbackgift"
//               onClick={removeNavbar}
//               className={isActive('/cashbackgift') ? 'active' : ''}
//             >
//               Cashback Gift Cards
//             </Link>
//             <Link
//               to="/balancecheker"
//               onClick={removeNavbar}
//               className={isActive('/balancecheker') ? 'active' : ''}
//             >
//             Balace Checker
//             </Link>
//             <Link
//               to="/howtowork"
//               onClick={removeNavbar}
//               className={isActive('/howtowork') ? 'active' : ''}
//             >
//               How it Works
//             </Link>
//             <Link
//               to="/faqs"
//               onClick={removeNavbar}
//               className={isActive('/faqs') ? 'active' : ''}
//             >
//              FAQS
//             </Link>
//             <Link
//               // to="/career"
//               // onClick={removeNavbar}
//               // className={isActive('/career') ? 'active' : ''}
//             >
//     <button onClick={toggleDarkTheme} style={{ background: 'none', border: 'none', cursor: 'pointer' }} className='header-theme'>
//   {darkTheme ? <GoMoon /> : <GoSun />}
// </button>

//             </Link>
//             <button className='header-getapp'>Get the app</button>
//           </div>
//           <div className={`closenavbar ${navbarActive ? 'visible' : 'hidden'}`} onClick={removeNavbar}>
//             <GrFormClose className='icon' />
//           </div>
//           <div className={`togglenavbar ${navbarActive ? 'hidden' : 'visible'}`} onClick={showNavbar}>
//             <HiMenu className='icon' />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "../Main/Header.css";
import { GrFormClose } from "react-icons/gr";
import { HiMenu } from "react-icons/hi";

function Header() {
  const [navbarActive, setNavbarActive] = useState(false);

  const location = useLocation();
  const [headerClass, setHeaderClass] = useState("header");
  const [activeLink, setActiveLink] = useState(location.pathname);

  const isActive = (path) => {
    return window.location.pathname === path;
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const showNavbar = () => {
    setNavbarActive(true);
  };

  const removeNavbar = () => {
    setNavbarActive(false);
  };

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setHeaderClass("header activeheader");
    } else {
      setHeaderClass("header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <header className="header">
    //   <div className="logo">
    //    <img src='/Images/everupicon.png' />
    //   </div>

    //   <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
    //     <Link to="/home" className={isActive("/home") ? "active" : ""}>
    //       Home
    //     </Link>
    //     <Link to="/cashbackgift" className={isActive("/cashbackgift") ? "active" : ""}>
    //       Cashback Gift Cards
    //     </Link>
    //     <Link to="/balancecheker" className={isActive("/balancecheker") ? "active" : ""}>
    //       Balance Checker
    //     </Link>
    //     <Link to="/howtowork" className={isActive("/howtowork") ? "active" : ""}>
    //       How it Works
    //     </Link>
    //     <Link to="/faqs" className={isActive("/faqs") ? "active" : ""}>
    //       FAQs
    //     </Link>

    //       {/* <IoSunnyOutline className="mobile-refresh-icon" onClick={toggleTheme} /> */}
    //     <button className="cta-button">Get the app</button>
    //   </nav>

    //     <div className="mobile-togglemenu" onClick={toggleMenu}>
    //       {menuOpen ? <FaTimes /> : <FaBars />}
    //   </div>
    // </header>

    <div className="header-container">
      <div className={headerClass}>
        <div className="upper-header">
          <div className="home-logo">
            <img
              src="/Images/everupicon.png"
              alt="header-everup"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="main-header">
          <div className={`left ${navbarActive ? "activeleft" : ""}`}>
            <NavLink
              to="/Home"
              onClick={removeNavbar}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/cashbackgift"
              onClick={removeNavbar}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cashback Gift Cards
            </NavLink>
            <NavLink
              to="/balancecheker"
              onClick={removeNavbar}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Balace Checker
            </NavLink>
            <NavLink
              to="/howtowork"
              onClick={removeNavbar}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              How it Works
            </NavLink>
            <NavLink
              to="/faqs"
              onClick={removeNavbar}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              FAQS
            </NavLink>
            <button className="header-getapp">Get the app</button>
          </div>
          <div
            className={`closenavbar ${navbarActive ? "visible" : "hidden"}`}
            onClick={removeNavbar}
          >
            <GrFormClose className="icon" />
          </div>
          <div
            className={`togglenavbar ${navbarActive ? "hidden" : "visible"}`}
            onClick={showNavbar}
          >
            <HiMenu className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
