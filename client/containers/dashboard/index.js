import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = (props) => (
  <div className="main-content">
    <div className="page-title">{props.title}</div>
    <p>I am at the Dashboard section......</p>
  </div>
);
Dashboard.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Dashboard;
