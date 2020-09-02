import React from 'react';
import PropTypes from 'prop-types';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faSearch,
  faTh,
  faTasks,
  faCogs,
  faCog,
  faUsers,
  faKey,
  faUser,
  faSignOutAlt,
  faExclamationTriangle,
  faTimesCircle,
  faHeartbeat,
  faSlidersH,
  faCaretRight,
  faCaretDown,
  faArrowUp,
  faArrowDown,
  faInfoCircle,
  faTimes,
  faRedoAlt,
  faAngleRight,
  faAngleLeft,
  faPortrait,
  faEdit,
  faAsterisk,
  faCheck,
  faLaptop,
  faHandPointLeft,
  faServer,
  faSitemap,
  faCheckSquare,
  faDotCircle,
  faStop,
  faRandom,
  faGift,
  faWrench,
  faCrosshairs,
  faEyeSlash,
  faEye,
  faHistory,
  faSortUp,
  faSortDown,
  faChevronRight as fasChevronRight,
  faChevronDown as fasChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSquare,
  faCircle,
  faCopy,
  faCheckCircle,
  faTimesCircle as faFailedCircle,
  faClone,
  faLightbulb,
} from '@fortawesome/free-regular-svg-icons';

const initFontAwesomeLibrary = () => {
  [
    faTachometerAlt,
    faSearch,
    faTh,
    faTasks,
    faCogs,
    faCog,
    faUsers,
    faKey,
    faUser,
    faSignOutAlt,
    faExclamationTriangle,
    faTimesCircle,
    faHeartbeat,
    faSlidersH,
    faCaretRight,
    faCaretDown,
    faArrowUp,
    faArrowDown,
    faInfoCircle,
    faTimes,
    faRedoAlt,
    faAngleRight,
    faAngleLeft,
    faPortrait,
    faEdit,
    faAsterisk,
    faCheck,
    faLaptop,
    faHandPointLeft,
    faServer,
    faSitemap,
    faCheckSquare,
    faDotCircle,
    faStop,
    faRandom,
    faGift,
    faWrench,
    faCrosshairs,
    faEyeSlash,
    faEye,
    faHistory,
    faSortUp,
    faSortDown,
    fasChevronRight,
    fasChevronDown,

    faSquare,
    faCircle,
    faCopy,
    faCheckCircle,
    faFailedCircle,
    faClone,
    faLightbulb,
  ].forEach((icon) => {
    library.add(icon);
  });
};

initFontAwesomeLibrary();

const FontAwesomeIcon = (props) => {
  const {style, icon, ...otherProps} = props;
  return (
    <Icon style={{cursor: 'pointer', ...style}} icon={icon} {...otherProps} />
  );
};

FontAwesomeIcon.defaultProps = {
  style: {},
};

FontAwesomeIcon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  style: PropTypes.objectOf(PropTypes.any),
};

export default FontAwesomeIcon;
