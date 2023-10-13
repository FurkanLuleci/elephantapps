import React from 'react'
import { clientPngs } from '../../Data/Clientsimg.js'
import { useState } from 'react';

const ClientsListItem = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const imageClasses = `mx-auto ${isHovered ? '' : 'grayscale opacity-20'} hover:grayscale-0 hover:opacity-100`;

  return (
    <li className='p-4' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <img className={imageClasses} src={image} alt="" />
    </li>
  );
};

const Clients = () => {


  return (
    <div className='mx-[25px]'>
      <span className="text-[#ff5354] text-xs font-bold px-4">CLIENTS</span>
      <div className='max-w-[95%] mx-auto my-20'>
        <ul className='grid md:grid-cols-2 lg:grid-cols-4 place-content-center'>
          {clientPngs.map((image, index) => (
            <ClientsListItem key={index} image={image} />
          ))}
        </ul>
      </div>
    </div>
  );
};




export default Clients