import React from 'react';
// import PropTypes from 'prop-types';
import QuickIconTile from '../../components/IconTile';

const ENTITY_LIST = [
  {
    label: 'Create',
    link: '/users/create',
    icon: 'user-plus',
  },
  {
    label: 'Manage',
    link: '/users/manage',
    icon: 'cogs',
  },
];

const User = () => {
  return (
    <div className="flex">
      <div className="row quick-tile-section">
        <div className="flex tile-section">
          {ENTITY_LIST.map((entity) => (
            <QuickIconTile key={entity.label} {...entity} />
          ))}
        </div>
      </div>
    </div>
  );
};
User.propTypes = {
  // title: PropTypes.string.isRequired,
};
export default User;
