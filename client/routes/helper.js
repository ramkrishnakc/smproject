import Dashboard from '../containers/dashboard';
import User from '../containers/user';
import CreateUser from '../containers/user/create';
import ManageUser from '../containers/user/manage';
import NotFound from '../containers/404';
import Profile from '../containers/profile';

const modules = [
  {
    routeProps: {
      path: '/',
      exact: true,
      component: Dashboard,
    },
    name: 'dashboard',
    text: 'Dashboard',
    icon: 'tachometer-alt',
    roles: ['admin'],
    sidebar: true,
  },
  {
    routeProps: {
      path: '/users/manage',
      exact: true,
      component: ManageUser,
    },
    name: 'manage-user',
    breadCrumb: [
      {
        label: 'Users',
        path: '/users',
        className: 'link-available',
        title: 'Go to Users page',
      },
      {
        label: 'Manage',
        title: 'You are at Manage Users page',
      },
    ],
    roles: ['admin'],
  },
  {
    routeProps: {
      path: '/users/create',
      exact: true,
      component: CreateUser,
    },
    name: 'create-user',
    breadCrumb: [
      {
        label: 'Users',
        path: '/users',
        className: 'link-available',
        title: 'Go to Users page',
      },
      {
        label: 'Create',
        title: 'You are at Create Users page',
      },
    ],
    roles: ['admin'],
  },
  {
    routeProps: {
      path: '/users',
      exact: true,
      component: User,
    },
    name: 'users',
    text: 'Users',
    icon: 'users',
    roles: ['admin', 'root'],
    sidebar: true,
  },
  {
    routeProps: {
      path: '/profile',
      component: Profile,
    },
    name: 'profile',
    text: 'Profile',
    roles: ['admin'],
  },
  {
    routeProps: {
      path: '/404',
      component: NotFound,
    },
    name: 'notFound',
    roles: ['admin'],
  },
];

// Role exists in array
const allowed = (list, role) => list.indexOf(role) > -1;

// Get all authorized routes
const filterRoutes = (itemsArray, role) =>
  itemsArray
    .filter((item) => allowed(item.roles, role))
    .map(({name, text, icon, breadCrumb, routeProps, nestedRoutes}) => {
      const obj = {name, text, icon, breadCrumb, routeProps};
      if (nestedRoutes) {
        obj.nestedRoutes = filterRoutes(nestedRoutes, role);
      }
      return obj;
    });

// Get all needed side bar items
const filterSidebarItems = (itemsArray, role) =>
  itemsArray
    .filter((item) => item.sidebar && allowed(item.roles, role))
    .map(({name, text, icon, routeProps: {path}}) => ({
      name,
      text,
      icon,
      routePath: path,
    }));

// Return side-bar items & routes
const getRoutesAndSidebarItems = (role) => {
  const x = {
    routeModules: filterRoutes(modules, role),
    menuItems: filterSidebarItems(modules, role),
  };
  return x;
};
export default getRoutesAndSidebarItems;
