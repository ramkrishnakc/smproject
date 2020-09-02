import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class FourOhFour extends Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>404 Not found!</h1>
        <p>The page you tried to reach is not available.</p>
        <hr />
        <Link to='/'>Home</Link>
      </div>
    )
  }
}
