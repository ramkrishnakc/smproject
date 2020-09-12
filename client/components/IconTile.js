import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FontAwesomeIcon from './FontAwesomeLibrary';

const QuickIconTile = ({icon, link, label, additionalClassname}) => (
  <Link to={link}>
    <div
      role="presentation"
      className={`flex horizontal-align-center vertical-align-center quick-action-tile ${
        additionalClassname || ''
      }`}
    >
      {icon ? (
        <div className="tile-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
      ) : (
        <span />
      )}
      <div>{label}</div>
    </div>
  </Link>
);

QuickIconTile.defaultProps = {
  additionalClassname: '',
};
QuickIconTile.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  additionalClassname: PropTypes.string,
};
export default QuickIconTile;
