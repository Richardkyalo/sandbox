import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaSun, FaMoon, FaTimes, FaBars } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'react-feather';
import { useTheme } from 'next-themes';

export default function NavBar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        // User has scrolled past 100 pixels, change navbar background color
        setScrolled(true);
      } else {
        // User has scrolled back to the top, reset navbar background color
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const [navbar, setNavbar] = useState(false);

  const { resolvedTheme, theme, setTheme } = useTheme();
  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className={theme === 'light' ? `bg-gray-100 bg-opacity-20` : ""}>
      <nav className={`w-full fixed md:items-center md:h-24 top-0 left-0 right-0 hover:bg-gray-100 hover:text-black z-10 ${scrolled ? 'bg-gray-100 text-black' : 'bg-transparent text-white'}`} style={{ transition: 'background-color 1s ease, color 1s ease' }}>
        <div className="px-4 mx-auto lg:max-w-7xl">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* LOGO */}
            <Link href="/">
              <div className='flex gap-1 font-bold items-center'>
                <h2 className="text-2xl cursor-pointer italic">SAND</h2>
                <span className='text-black'><img src="/images/icon.webp" className='fill-current' width={30} height={30} alt="" /></span>
                <h2 className="text-2xl text-green-500 cursor-pointer"> BOX</h2>
              </div>
            </Link>
            {/* MENU ITEMS */}
            <div className={`hidden md:flex items-center space-x-6 ${navbar ? 'block' : 'hidden'}`}>
              <ul className="flex font-2xl space-x-4">
                <li className='hover:text-green-500  cursor-pointer'>
                  <ScrollLink to="home" smooth={true} duration={1000} onClick={toggleNavbar} spy={true} activeClass="text-green-500 underline">Home</ScrollLink>
                </li>
                <li className='hover:text-green-500 cursor-pointer'>
                  <ScrollLink to="services" smooth={true} duration={1000} onClick={toggleNavbar} spy={true} activeClass="text-green-500 underline">Services</ScrollLink>
                </li>
                <li className='hover:text-green-500 cursor-pointer'>
                  <ScrollLink to="portfolio" smooth={true} duration={1000} onClick={toggleNavbar} spy={true} activeClass="text-green-500 underline">Portfolio</ScrollLink>
                </li>
                <li className='hover:text-green-500 cursor-pointer'>
                  <ScrollLink to="testimonials" smooth={true} duration={1000} onClick={toggleNavbar} spy={true} activeClass="text-green-500 underline">Testimonials</ScrollLink>
                </li>
                <li className='hover:text-green-500 cursor-pointer'>
                  <ScrollLink to="technology" smooth={true} duration={1000} onClick={toggleNavbar} spy={true} activeClass="text-green-500 underline">Technologies</ScrollLink>
                </li>
                <li className='hover:text-green-500 cursor-pointer'>
                  <ScrollLink to="blog" smooth={true} duration={1000} onClick={toggleNavbar} spy={true} activeClass="text-green-500 underline">Blog</ScrollLink>
                </li>
                <li className='hover:text-green-500 cursor-pointer'>
                  <ScrollLink to="about" smooth={true} duration={1000} onClick={toggleNavbar} spy={true} activeClass="text-green-500 underline">About</ScrollLink>
                </li>
                {/* <li className='hover:text-green-500 flex flex-row items-center cursor-pointer'>
                  <Phone />
                  <span className="ml-2"> {/* Add margin-left for space */}
                    {/* <ScrollLink to="contact" smooth={true} duration={1000} onClick={toggleNavbar}>
                      +254 743 457481
                    </ScrollLink>
                  </span> */}
                {/* </li> */} 

              </ul>
            </div>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button className="p-2 rounded-md outline-none focus:border-gray-400 focus:border" onClick={toggleNavbar}>
                {navbar ? (
                  <FaTimes />
                ) : (
                  <FaBars />
                )}
              </button>
            </div>
            {/* Render the "Sign in" button on medium screens and above */}
            <div className="hidden md:block">
              <a href="" className="p-2 px-4 rounded-full bg-green-500 text-sm text-white hover:text-white hover:bg-green-600">Sign in</a>
            </div>
          </div>
        </div>
        {/* COLLAPSED NAVBAR FOR MOBILE */}
        <div className={`px-4 md:hidden  ${navbar ? 'block' : 'hidden'} `} >
          <ul className="flex flex-col mb-4 text-center space-y-4">
            <li className='hover:text-green-500 cursor-pointer border-b border-green-300 '>
              <ScrollLink to="home" smooth={true} duration={1000} onClick={toggleNavbar}>Home</ScrollLink>
            </li>
            <li className='hover:text-green-500 cursor-pointer border-b border-green-300'>
              <ScrollLink to="services" smooth={true} duration={1000} onClick={toggleNavbar}>Services</ScrollLink>
            </li>
            <li className='hover:text-green-500 cursor-pointer border-b border-green-300'>
              <ScrollLink to="portfolio" smooth={true} duration={1000} onClick={toggleNavbar}>Portfolio</ScrollLink>
            </li>
            <li className='hover:text-green-500 cursor-pointer border-b border-green-300'>
              <ScrollLink to="testimonials" smooth={true} duration={1000} onClick={toggleNavbar}>Testimonials</ScrollLink>
            </li>
            <li className='hover:text-green-500 cursor-pointer border-b border-green-300'>
              <ScrollLink to="technology" smooth={true} duration={1000} onClick={toggleNavbar}>Technologies</ScrollLink>
            </li>
            <li className='hover:text-green-500 cursor-pointer border-b border-green-300'>
              <ScrollLink to="blog" smooth={true} duration={1000} onClick={toggleNavbar}>Blog</ScrollLink>
            </li>
            <li className='hover:text-green-500 cursor-pointer border-b border-green-300'>
              <ScrollLink to="about" smooth={true} duration={1000} onClick={toggleNavbar}>About</ScrollLink>
            </li>
            <li className='hover:text-green-500 cursor-pointer border-b border-green-300'>
              <ScrollLink to="contact" smooth={true} duration={1000} onClick={toggleNavbar}>Contacts</ScrollLink>
            </li>
          </ul>
        </div>
        <div className={`md:hidden mb-4 text-center ${navbar ? 'block' : 'hidden'}`}>
          <a href="" className="p-2 px-4 rounded-full bg-green-500 text-sm text-white hover:text-white hover:bg-green-600" onClick={toggleNavbar}>Sign in</a>
        </div>
      </nav>

    </div>
  );
}
