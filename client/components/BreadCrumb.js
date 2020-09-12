import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const BreadCrumb = ({items}) => (
  <div className="breadcrumb-wrapper page-title">
    <ul className="breadcrumb">
      {items.map(({label, className, title, path}) => (
        <li key={label} className={className} title={title}>
          {path ? <Link to={path}>{label}</Link> : label}
        </li>
      ))}
    </ul>
  </div>
);

BreadCrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      className: PropTypes.string,
      title: PropTypes.string,
      path: PropTypes.string,
    })
  ).isRequired,
};

export default BreadCrumb;
