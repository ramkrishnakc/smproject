import React from 'react';
import {Link} from 'react-router-dom';

const FourOhFour = () => (
  <>
    <h2>404 Not found!</h2>
    <p>The page you tried to reach is not available.</p>
    <Link to="/">Dashboard</Link>
  </>
);

export default FourOhFour;
