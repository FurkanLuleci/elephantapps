import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <Fragment>
      <header className="fixed top-0 left-0 w-full h-[4.5rem] bg-white flex justify-between items-center px-10
       transition-shadow duration-300 ease-in-out shadow-md header">
        <Link to="/">
          <img src="/ea_logo.inline.svg" alt="Logo" />
        </Link>
        <nav className=''>
          <ul className="" >
            <li className=''>
              <Link to="/" className="">HOME</Link>
            </li>
            <li className=''>
              <Link to="/about-us" className="">ABOUT US</Link>
            </li>
            <li className=''>
              <Link to="/services" className="">SERVICES</Link>
            </li>
            <li className=''>
              <Link to="/projects" className="">PROJECTS</Link>
            </li>
            <li className=''>
              <Link to="/careers" className="">CAREERS</Link>
            </li>
            <li className=''>
              <Link to="/contact-us" className="">CONTACT US</Link>
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


