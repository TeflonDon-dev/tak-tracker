import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({title,handleShowTask,showTask}) => {
  const text = "Add"
  const color = "green"
  
  const location = useLocation();
    return (
    
      <header className='header'>
        
        <h2>{title}</h2>
        {location.pathname === "/" &&
          <Button text={!showTask ? text : 'Close'} color={showTask ? "red" : color} handleShowTask={handleShowTask} />}
    </header>
    
  )
}

Header.defaultProps = {
    title:"Task Tracker"
} 

Header.propTypes = {
    title:PropTypes.string
}

export default Header