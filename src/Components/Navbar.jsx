import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <Fragment>
      <header className="fixed top-0 left-0 w-full h-[4.5rem] bg-white flex justify-between items-center px-10 transition-shadow duration-300 ease-in-out shadow-md header">
        <Link to="/">
          <img src="/ea_logo.inline.svg" alt="Logo" />
        </Link>
        <nav className='mr-14'>
          <ul className="flex items-center  ml-2 mr-2 h-[4.5rem]" style={{fontSize:'11px'}}>
            <li  className='py-4 hover: border-t-4'>
              <Link to="/" className="text-xs hover:text-gray-700 ">HOME</Link>
            </li>
            <li className='py-4 hover: border-t-4'>
              <Link to="/about-us" className="text-xs hover:text-gray-700 ">ABOUT US</Link>
            </li>
            <li className='py-4 hover: border-t-4'>
              <Link to="/services" className="text-xs hover:text-gray-700  ">SERVICES</Link>
            </li>
            <li className='py-4 hover: border-t-4'>
              <Link to="/projects" className="text-xs hover:text-gray-700 ">PROJECTS</Link>
            </li>
            <li className='py-4 hover: border-t-4'>
              <Link to="/careers" className="text-xs hover:text-gray-700  ">CAREERS</Link>
            </li>
            <li className='py-4 hover: border-t-4'>
              <Link to="/contact-us" className="text-xs hover:text-gray-700 ">CONTACT US</Link>
            </li>
            <button className="flex items-center">
              <span className="text-xs mr-2">TR</span>
              <img src="/tr.svg" alt="TR Flag" />
            </button>
          </ul>
        </nav>
      </header>
      <div className=""></div>
    </Fragment>
  );
};

export default Navbar;
