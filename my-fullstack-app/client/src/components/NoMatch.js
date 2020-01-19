import React from 'react';
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
  let location = useLocation();
  
  return (
    <div>
      <h1>404 - Path {location.pathname} not found</h1>
    </div>
  )
}
 
export default NoMatch;