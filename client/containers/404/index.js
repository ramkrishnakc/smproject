import React from 'react';
import {Link} from 'react-router-dom';

const FourOhFour = () => (
  <div className="main-content">
    <h2>404 Not found!</h2>
    <p>The page you tried to reach is not available.</p>
    <Link to="/">Dashboard</Link>
  </div>
);

export default FourOhFour;
