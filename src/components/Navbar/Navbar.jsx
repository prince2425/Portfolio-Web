import React, {useEffect, useState} from 'react'
import { MdOutlineWbSunny } from "react-icons/md";  /// react-icons
// import { IoMoonOutline} from "react-icon/io5"
import { FaBars } from "react-icons/fa";
import './Navbar.css'
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {

    const[isMenuActive,setIsMenuActive]= useState(false);

    const [theme ,setTheme] = useState('dark');

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme);
    },[theme])

    const toggleTheme = () =>{
        setTheme(prev=>(prev === 'dark' ? 'light' : 'dark'));
    } 


    const toggleMenu = ()=>{
        setIsMenuActive(!isMenuActive)
    }

  return (
    <header>
    <nav className='flex between wrapper navbar'>
        <a href="#" className='logo'><span>P</span>Singh.</a>

        {/* desktop menu */}
        <ul className='flex gap-2 desktop-menu'>
            <li><a href="#" className='link'>Home</a></li>
            <li><a href="#" className='link'>Services</a></li>
            <li><a href="#" className='link'>About Me</a></li>
            <li><a href="#" className='link'>Projects</a></li>
            <li><a href="#" className='link'>Testimonials</a></li>
            <li><a href="#" className='link'>Contact Me</a></li>
        </ul>

        <div className='flex gap-2 nav-action'>
            <a href="#" className='icon-container border-inverse' onClick={toggleTheme}>
                {theme === 'dark' ? <MdOutlineWbSunny /> : < IoMoonOutline />}
            </a>
            <a href="#" className='btn'>Let's Talk</a>
            <a href="#" className='hamburger' onClick={toggleMenu}>
               {isMenuActive?<FaXmark />: <FaBars />}
            </a>
        </div>

        {/* MOBILE MENU */}

        <ul className={`mobile-menu ${isMenuActive? 'mobile-menu-active':null}`}>
            <li><a href="#" className='link'>Home</a></li>
            <li><a href="#" className='link'>Services</a></li>
            <li><a href="#" className='link'>About Me</a></li>
            <li><a href="#" className='link'>Projects</a></li>
            <li><a href="#" className='link'>Testimonials</a></li>
            <li><a href="#" className='link'>Contact Me</a></li>
            
            <li><a href="#" className='btn'>Let's Talk</a></li>
        </ul>
    </nav>
    </header>
  )
}

export default Navbar