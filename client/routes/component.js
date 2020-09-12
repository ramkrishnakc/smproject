import React from 'react';
import PropTypes from 'prop-types';
import BreadCrumbComponent from '../components/BreadCrumb';

const ComponentWrapper = ({breadCrumb, title, children}) => {
  return (
    <div className="main-content">
      {Array.isArray(breadCrumb) && breadCrumb.length ? (
        <BreadCrumbComponent items={breadCrumb} />
      ) : (
        <div className="page-title">{title}</div>
      )}
      <div className="row">{children}</div>
    </div>
  );
};

ComponentWrapper.defaultProps = {
  breadCrumb: undefined,
  title: '',
};

ComponentWrapper.propTypes = {
  breadCrumb: PropTypes.arrayOf(PropTypes.shape),
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
export default ComponentWrapper;
