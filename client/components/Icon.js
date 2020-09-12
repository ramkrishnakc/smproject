import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from './FontAwesomeLibrary';

const CircleMenuIcon = ({name, icon, clickHandler, label}) => (
  <div
    className="circle-icon-container"
    onClick={clickHandler}
    role="presentation"
  >
    <div className="circle-icon" name={name}>
      <FontAwesomeIcon icon={icon} />
    </div>
    <div>{label}</div>
  </div>
);

CircleMenuIcon.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

const RightLabelledIcon = ({name, label, clickHandler, icon}) => (
  <div
    className="right-label-icon-container"
    onClick={clickHandler}
    role="presentation"
  >
    <div className="right-label-icon" name={name}>
      <FontAwesomeIcon icon={icon} />
    </div>
    <div>{label}</div>
  </div>
);

RightLabelledIcon.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export {CircleMenuIcon, RightLabelledIcon};
