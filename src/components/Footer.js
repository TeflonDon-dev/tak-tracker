import React from 'react';
import { Link,useLocation } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  return (
    <footer>Teflon Don dev &copy;{year}
      {location.pathname === "/" &&
        <div><Link to="/about">About</Link></div>}
      
      </footer>
  )
}

export default Footer