import React from 'react'
import { useRoutes ,  } from 'react-router-dom'
import Home from '../views/Home'
import AboutUs from '../views/aboutUs'
import Services from '../views/Services'
import Projects from '../views/Projects'
import Careers from '../views/Careers'
import ContactUs from '../views/ContactUs'
const Router = () => {
const routes = useRoutes([
    {path: "/"  , element:<Home/>},
    {path: "/about-us"  , element:<AboutUs/>},
    {path: "/services"  , element:<Services/>},
    {path: "/projects"  , element:<Projects/>},
    {path: "/projects"  , element:<Careers/>},
    {path: "/projects"  , element:<ContactUs/>},

]) 

  return routes;
}

export default Router