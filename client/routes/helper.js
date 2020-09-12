import Dashboard from '../containers/dashboard';
import User from '../containers/user';
import CreateUser from '../containers/user/create-user';
import ManageUser from '../containers/user/manage-user';
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
    text: 'Manage Users',
    roles: ['admin'],
  },
  {
    routeProps: {
      path: '/users/create',
      exact: true,
      component: CreateUser,
    },
    name: 'create-user',
    text: 'Create Users',
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
    .map(({name, text, icon, routeProps, nestedRoutes}) => {
      const obj = {name, text, icon, routeProps};
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
