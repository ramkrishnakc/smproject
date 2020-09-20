import React from 'react';
import PropTypes from 'prop-types';
import QuickIconTile from './IconTile';

const PageList = (props) => {
  return (
    <div className="flex">
      <div className="row quick-tile-section">
        <div className="flex tile-section">
          {props.itemsList.map((item) => (
            <QuickIconTile key={item.label} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
PageList.propTypes = {
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      additionalClassname: PropTypes.string,
    })
  ).isRequired,
};
export default PageList;
