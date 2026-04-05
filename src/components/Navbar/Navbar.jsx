import React, { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
  setIsMenuActive(false);
};

  return (
    <header className="header">
      <nav className="flex between wrapper navbar">
        <a href="#" className="logo p-2 rounded-[30px] text-xl">
          {/* <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> */}
          <span className="gradient-text font-bold">Prince Singh</span>
        </a>

        {/* Desktop Menu */}
        <ul className="desktop-menu md:flex items-center gap-x-15 hidden">
          <li>
            <AnchorLink href="#home">Home</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#service">Services</AnchorLink>
          </li>
          <li>
             <AnchorLink href="#about">About Me</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#project"> Projects </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#testimonial">Testimonials</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contactme">Contact Me</AnchorLink>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="icon-container border-inverse"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <MdOutlineWbSunny /> : <IoMoonOutline />}
          </a>

          {/* <a href="#" className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-3 py-2 font-bold rounded-full"> */}
          <a href="#" className="btn btn2">
            Let's Talk
          </a>

          <a href="#" className="hamburger" onClick={toggleMenu}>
            {isMenuActive ? <FaXmark /> : <FaBars />}
          </a>
        </div>

        {/* Mobile Menu */}

        <ul
          className={`mobile-menu ${isMenuActive ? "mobile-menu-active" : ""}`}
        >
          <li>
            <AnchorLink href="#home" onClick={closeMenu}>Home</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#service" onClick={closeMenu}>Services</AnchorLink>
          </li>
          <li>
             <AnchorLink href="#about" onClick={closeMenu}>About Me</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#project" onClick={closeMenu}> Projects </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#testimonial" onClick={closeMenu}>Testimonials</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contactme" onClick={closeMenu}>Contact Me</AnchorLink>
          </li>

          <li>
            <a href="#" className="btn" onClick={closeMenu}>
              Let's Talk
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;













// import React, {useEffect, useState} from 'react'
// import { MdOutlineWbSunny } from "react-icons/md";  /// react-icons
// // import { IoMoonOutline} from "react-icon/io5"
// import { FaBars } from "react-icons/fa";
// import './Navbar.css'
// import { FaXmark } from "react-icons/fa6";

// const Navbar = () => {

//     const[isMenuActive,setIsMenuActive]= useState(false);

//     const [theme ,setTheme] = useState('dark');

//     useEffect(()=>{
//         document.documentElement.setAttribute('data-theme',theme);
//     },[theme])

//     const toggleTheme = () =>{
//         setTheme(prev=>(prev === 'dark' ? 'light' : 'dark'));
//     }

//     const toggleMenu = ()=>{
//         setIsMenuActive(!isMenuActive)
//     }

//   return (
//     <header>
//     <nav className='flex between wrapper navbar'>
//         <a href="#" className='logo p-[ 8px ] rounded-[30px] red text-xl bg-none '><span className='bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent'>Prince Singh</span></a>

//         {/* desktop menu */}
//         <ul className=' gap-2 desktop-menu md:flex items-center gap-x-15 hidden'>
//             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent   transition-all duration-300 relative after:content-[&quot;&quot;] after:absolute after:w-0 after:h-0.5 after:bg-[#FB9935] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full group-hover:text-[#FB9935] cursor-pointer hover:text-[#FA6E00] antialiased font-semibold'>Home</a></li>
//             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent   transition-all duration-300 relative after:content-[&quot;&quot;] after:absolute after:w-0 after:h-0.5 after:bg-[#FB9935] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full group-hover:text-[#FB9935] cursor-pointer hover:text-[#FA6E00] antialiased font-semibold'>Services</a></li>
//             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent   transition-all duration-300 relative after:content-[&quot;&quot;] after:absolute after:w-0 after:h-0.5 after:bg-[#FB9935] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full group-hover:text-[#FB9935] cursor-pointer hover:text-[#FA6E00] antialiased font-semibold'>About Me</a></li>
//             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent   transition-all duration-300 relative after:content-[&quot;&quot;] after:absolute after:w-0 after:h-0.5 after:bg-[#FB9935] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full group-hover:text-[#FB9935] cursor-pointer hover:text-[#FA6E00] antialiased font-semibold'>Projects</a></li>
//             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent   transition-all duration-300 relative after:content-[&quot;&quot;] after:absolute after:w-0 after:h-0.5 after:bg-[#FB9935] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full group-hover:text-[#FB9935] cursor-pointer hover:text-[#FA6E00] antialiased font-semibold'>Testimonials</a></li>
//             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent   transition-all duration-300 relative after:content-[&quot;&quot;] after:absolute after:w-0 after:h-0.5 after:bg-[#FB9935] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full group-hover:text-[#FB9935] cursor-pointer hover:text-[#FA6E00] antialiased font-semibold'>Contact Me</a></li>
//         </ul>
//         <div className='flex items-center flex-wrap gap-3 '>
//             <a href="#" className='icon-container border-inverse ' onClick={toggleTheme}>
//                 {theme === 'dark' ? <MdOutlineWbSunny /> : < IoMoonOutline />}
//             </a>
//             <a href="#" className=' bg-gradient-to-r from-orange-400 to-orange-600 text-white inline-block  px-3 py-2 font-bold text-[.9rem] border-[.15rem] rounded-[100vw]   '>Let's Talk</a>
//             <a href="#" className='hamburger'  onClick={toggleMenu}>
//                {isMenuActive?<FaXmark />: <FaBars />}
//             </a>
//         </div>

//         {/* MOBILE MENU */}

//         <ul className={`mobile-menu ${isMenuActive? 'mobile-menu-active':null}`}>

//             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent   transition-all duration-300 relative after:content-[&quot;&quot;] after:absolute after:w-0 after:h-0.5 after:bg-[#FB9935] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full group-hover:text-[#FB9935] cursor-pointer hover:text-[#FA6E00] antialiased font-semibold'>Home</a></li>
//             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent   transition-all duration-300 relative after:content-[&quot;&quot;] after:absolute after:w-0 after:h-0.5 after:bg-[#FB9935] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full group-hover:text-[#FB9935] cursor-pointer hover:text-[#FA6E00] antialiased font-semibold'>Services</a></li>
//             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent   transition-all duration-300 relative after:content-[&quot;&quot;] after:absolute after:w-0 after:h-0.5 after:bg-[#FB9935] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full group-hover:text-[#FB9935] cursor-pointer hover:text-[#FA6E00] antialiased font-semibold'>About Me</a></li>
//             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent   transition-all duration-300 relative after:content-[&quot;&quot;] after:absolute after:w-0 after:h-0.5 after:bg-[#FB9935] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full group-hover:text-[#FB9935] cursor-pointer hover:text-[#FA6E00] antialiased font-semibold'>Projects</a></li>
//             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent   transition-all duration-300 relative after:content-[&quot;&quot;] after:absolute after:w-0 after:h-0.5 after:bg-[#FB9935] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full group-hover:text-[#FB9935] cursor-pointer hover:text-[#FA6E00] antialiased font-semibold'>Testimonials</a></li>
//             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent   transition-all duration-300 relative after:content-[&quot;&quot;] after:absolute after:w-0 after:h-0.5 after:bg-[#FB9935] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full group-hover:text-[#FB9935] cursor-pointer hover:text-[#FA6E00] antialiased font-semibold'>Contact Me</a></li>

//             <li><a href="#" className='btn'>Let's Talk</a></li>
//         </ul>
//     </nav>
//     </header>
//   )
// }

// export default Navbar

// // <p class="text-[18px] transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#FB9935] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full group-hover:text-[#FB9935] cursor-pointer hover:text-[#FA6E00] antialiased font-semibold bg-gradient-to-r from-[#E60026] to-[#FA6E00] text-transparent bg-clip-text">Home</p>

// // import React, {useEffect, useState} from 'react'
// // import { MdOutlineWbSunny } from "react-icons/md";  /// react-icons
// // // import { IoMoonOutline} from "react-icon/io5"
// // import { FaBars } from "react-icons/fa";
// // import './Navbar.css'
// // import { FaXmark } from "react-icons/fa6";

// // const Navbar = () => {

// //     const[isMenuActive,setIsMenuActive]= useState(false);

// //     const [theme ,setTheme] = useState('dark');

// //     useEffect(()=>{
// //         document.documentElement.setAttribute('data-theme',theme);
// //     },[theme])

// //     const toggleTheme = () =>{
// //         setTheme(prev=>(prev === 'dark' ? 'light' : 'dark'));
// //     }

// //     const toggleMenu = ()=>{
// //         setIsMenuActive(!isMenuActive)
// //     }

// //   return (
// //     <header>
// //     <nav className='flex between wrapper navbar'>
// //         <a href="#" className='logo p-[ 8px ] rounded-[30px] red text-xl bg-none '><span className='bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent'>Prince Singh</span></a>

// //         {/* desktop menu */}
// //         <ul className=' gap-2 desktop-menu md:flex items-center gap-x-15 hidden'>
// //             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Home</a></li>
// //             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Services</a></li>
// //             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>About Me</a></li>
// //             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Projects</a></li>
// //             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Testimonials</a></li>
// //             <li><a href="#" className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Contact Me</a></li>
// //         </ul>

// //         <div className='flex gap-2 nav-action'>
// //             <a href="#" className='icon-container border-inverse p-10' onClick={toggleTheme}>
// //                 {theme === 'dark' ? <MdOutlineWbSunny /> : < IoMoonOutline />}
// //             </a>
// //             <a href="#" className=' bg-gradient-to-r from-orange-400 to-orange-600 text-white inline-block  pt-5 font-bold text-[.9rem] border-[.15rem] rounded-[100vw]   '>Let's Talk</a>
// //             <a href="#" className='hamburger'  onClick={toggleMenu}>
// //                {isMenuActive?<FaXmark />: <FaBars />}
// //             </a>
// //         </div>

// //         {/* MOBILE MENU */}

// //         <ul className={`mobile-menu ${isMenuActive? 'mobile-menu-active':null}`}>
// //             <li><a href="#" className='link'>Home</a></li>
// //             <li><a href="#" className='link'>Services</a></li>
// //             <li><a href="#" className='link'>About Me</a></li>
// //             <li><a href="#" className='link'>Projects</a></li>
// //             <li><a href="#" className='link'>Testimonials</a></li>
// //             <li><a href="#" className='link'>Contact Me</a></li>

// //             <li><a href="#" className='btn'>Let's Talk</a></li>
// //         </ul>
// //     </nav>
// //     </header>
// //   )
// // }

// // export default Navbar

// // // <p class="text-[18px] transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#FB9935] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full group-hover:text-[#FB9935] cursor-pointer hover:text-[#FA6E00] antialiased font-semibold bg-gradient-to-r from-[#E60026] to-[#FA6E00] text-transparent bg-clip-text">Home</p>
