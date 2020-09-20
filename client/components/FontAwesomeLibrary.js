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
  faInfoCircle,
  faTimes,
  faAngleRight,
  faAngleLeft,
  faEdit,
  faAsterisk,
  faCheck,
  faLaptop,
  faStop,
  faRandom,
  faGift,
  faWrench,
  faEye,
  faHistory,
  faChevronRight as fasChevronRight,
  faChevronDown as fasChevronDown,
  faPlusCircle,
  faUserPlus,
  faUnlockAlt,
  faUniversity,
  faMoneyCheckAlt,
  faReceipt,
  faBookReader,
  faChalkboardTeacher,
  faExclamationCircle,
  faUsersCog,
  faUserClock,
  faPeopleCarry,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSquare,
  faCircle,
  faCopy,
  faClone,
  faClock,
  faCalendarAlt,
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
    faUnlockAlt,
    faUser,
    faSignOutAlt,
    faExclamationTriangle,
    faTimesCircle,
    faHeartbeat,
    faSlidersH,
    faInfoCircle,
    faTimes,
    faAngleRight,
    faAngleLeft,
    faEdit,
    faAsterisk,
    faCheck,
    faLaptop,
    faStop,
    faRandom,
    faGift,
    faWrench,
    faEye,
    faHistory,
    fasChevronRight,
    fasChevronDown,

    faSquare,
    faCircle,
    faCopy,
    faClone,
    faPlusCircle,
    faUserPlus,

    faUniversity,
    faClock,
    faCalendarAlt,
    faMoneyCheckAlt,
    faReceipt,
    faBookReader,
    faChalkboardTeacher,
    faExclamationCircle,
    faUsersCog,
    faUserClock,
    faPeopleCarry,
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
