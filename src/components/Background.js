import React from 'react';
import './Background.css';

const Background = ({ children }) => {
  return (
    <div className='bg-img'>
      {children}
    </div>
  );
}

export default Background;