import React from 'react';
import Clients from "../Components/Home/Clients.jsx";
import LifeCycle from '../Components/Home/LifeCycle.jsx';
import Arge   from   '../Components/Home/Arge.jsx';
import Support   from   '../Components/Home/Support.jsx';
import Team from '../Components/Home/Team.jsx';

const Home = () => {
  return (
   <> 
      <div className="flex pt-40 pb-8">
    <div className="flex-1 grid md:grid-cols-2 grid-cols-1 gap-20 items-center">
     <div className="flex flex-col items-left ml-[9rem] justify-center h-3/4">
      <span className='text-[35px] font-[300]'>
        Meetup with Startup Creator,<br />
        App Factory
         </span>
      <span className="text-gray-600">
        Do you have an app idea?<br />
        Let’s make it happen together...
          </span>
          
        <button className=' w-36 h-1/100 bg-red-500 rounded-full text-white font-semibold text-xs leading-7 mx-2 my-0.5 px-7 ml-[0.25rem] mt-4 text-center transition duration-100 ease-in-out'>
          Get Started</button>
      </div>
      <div className="flex items-center justify-center "> <img className='h-96' src="https://elephantapps.co/static/elephantapps-startup-rocket-643121cfa7db0b23f6cf0ce750cfa80f.webp"  alt='1' /></div>
     </div>
     </div>

     <div className='flex py-40 '>
     <div className="flex-1 grid md:grid-cols-2 grid-cols-1 gap-20 items-center">
     <div className="flex flex-col items-left ml-[9rem] justify-center h-3/4">
      <span className='text-[35px] font-[300]'>
      Developing web and mobile applications with the latest technologies considering
      user experience
         </span>
      <span className="text-[#757575] text-[15px]">
      Continously producing new ideas and new technologies with our team providing analysis, desing, software and consultancy services.
          </span>
          </div>
          <div className="flex items-center justify-center "> <img className='h-80' src="https://elephantapps.co/static/app-idea-5364d762f0f085a420f0428d96142ed9.webp"  alt='2' /></div>
     </div>
     </div>
     <Clients />
    <LifeCycle/>
    <Arge/>
    <Support/>
    <Team/>


     
      </>  
  );
};

export default Home;  
