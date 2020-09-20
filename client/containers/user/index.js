import React from 'react';
import PageList from '../../components/PageList';

const itemsList = [
  {
    label: 'Create',
    link: '/users/create',
    icon: 'user-plus',
  },
  {
    label: 'Manage',
    link: '/users/manage',
    icon: 'users-cog',
  },
];

const User = () => <PageList itemsList={itemsList} />;
export default User;
