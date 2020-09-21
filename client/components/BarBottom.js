import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import React from 'react';

const BarBottom = (props) => {
  const {sidebarCollapsed} = props;
  return (
    <div className={`bar-bottom ${sidebarCollapsed ? 'collapsed' : ''}`}>
      {props.children}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sidebarCollapsed: state.login.sidebarCollapsed,
});

BarBottom.defaultProps = {
  children: '',
};
BarBottom.propTypes = {
  sidebarCollapsed: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.any),
};

export default connect(mapStateToProps, {})(BarBottom);
