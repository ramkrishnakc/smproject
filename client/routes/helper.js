import Dashboard from '../containers/dashboard';
import NotFound from '../containers/404';
import Profile from '../containers/profile';

import Admission from '../containers/admission';
import Assignment from '../containers/assignment';
import Attendance from '../containers/attendance';
import Calendar from '../containers/calendar';
import Fee from '../containers/fee';
import Homework from '../containers/homework';
import Hr from '../containers/hr';
import Leave from '../containers/leave';

import AddBook from '../containers/library/create';
import AvailableBooks from '../containers/library/manage';
import PersonalStats from '../containers/library/personal-stats';
import LibraryStats from '../containers/library/library-stats';
import Library from '../containers/library';

import Notice from '../containers/notice';
import Payroll from '../containers/payroll';

import CreateUser from '../containers/user/create';
import ManageUser from '../containers/user/manage';
import UserStats from '../containers/user/stats';
import User from '../containers/user';

const getRouteProps = (path, component, exact) => ({
  path,
  exact,
  component,
});

const getSidebar = (name, text, icon) => ({
  name, // key used in route
  text, // Title of page as well as Label in sidebar
  icon, // Icon for sidebar
  sidebar: true, // Display in sidebar
});

const getBreadCrumb = (parents, label, pageName) => {
  const breadCrumb = [];

  parents.forEach((item) => {
    breadCrumb.push({
      label: item.label,
      path: item.path,
      className: 'link-available',
      title: `Go to ${item.label} page`,
    });
  });
  breadCrumb.push({label, title: `You are at ${pageName || label} page`});
  return breadCrumb;
};

const userArr = [{label: 'Users', path: '/users'}];
const libArr = [{label: 'Library', path: '/library'}];

// This list is for the routes in UI
const modules = [
  {
    routeProps: getRouteProps('/', Dashboard, true),
    ...getSidebar('dashboard', 'Dashboard', 'tachometer-alt'),
    roles: ['admin'],
  },
  /** *-------------------- * * ---------------------* */
  {
    routeProps: getRouteProps('/admission', Admission, true),
    ...getSidebar('admission', 'Admission', 'university'),
    roles: ['admin', 'root'],
  },
  {
    routeProps: getRouteProps('/assignment', Assignment, true),
    ...getSidebar('assignment', 'Assignment', 'tasks'),
    roles: ['admin', 'root'],
  },
  {
    routeProps: getRouteProps('/attendance', Attendance, true),
    ...getSidebar('attendance', 'Attendance', 'clock'),
    roles: ['admin', 'root'],
  },
  {
    routeProps: getRouteProps('/calendar', Calendar, true),
    ...getSidebar('calendar', 'Calendar', 'calendar-alt'),
    roles: ['admin', 'root'],
  },
  {
    routeProps: getRouteProps('/fee', Fee, true),
    ...getSidebar('fee', 'Fee & Payment', 'receipt'),
    roles: ['admin', 'root'],
  },
  {
    routeProps: getRouteProps('/homework', Homework, true),
    ...getSidebar('homework', 'Homework', 'chalkboard-teacher'),
    roles: ['admin', 'root'],
  },
  {
    routeProps: getRouteProps('/hr', Hr, true),
    ...getSidebar('hr', 'HR Section', 'people-carry'),
    roles: ['admin', 'root'],
  },
  {
    routeProps: getRouteProps('/leave', Leave, true),
    ...getSidebar('leave', 'Leave', 'user-clock'),
    roles: ['admin', 'root'],
  },
  /** *---------------------- * Library * -------------------* */
  {
    routeProps: getRouteProps('/library/add', AddBook, true),
    breadCrumb: getBreadCrumb(libArr, 'Add Book'),
    name: 'add-book',
    roles: ['admin'],
  },
  {
    routeProps: getRouteProps('/library/list', AvailableBooks, true),
    breadCrumb: getBreadCrumb(libArr, 'Available Books'),
    name: 'list-book',
    roles: ['admin'],
  },
  {
    routeProps: getRouteProps('/library/personal-stats', PersonalStats, true),
    breadCrumb: getBreadCrumb(libArr, 'Personal Stats'),
    name: 'personal-stats',
    roles: ['admin'],
  },
  {
    routeProps: getRouteProps('/library/lib-stats', LibraryStats, true),
    breadCrumb: getBreadCrumb(libArr, 'Stats'),
    name: 'lib-stats',
    roles: ['admin'],
  },
  {
    routeProps: getRouteProps('/library', Library, true),
    ...getSidebar('library', 'Library', 'book-reader'),
    roles: ['admin', 'root'],
  },
  /** */
  {
    routeProps: getRouteProps('/notice', Notice, true),
    ...getSidebar('notice', 'Notice', 'exclamation-circle'),
    roles: ['admin', 'root'],
  },
  {
    routeProps: getRouteProps('/payroll', Payroll, true),
    ...getSidebar('payroll', 'Payroll', 'money-check-alt'),
    roles: ['admin', 'root'],
  },
  /** *---------------------- * Users * -------------------* */
  {
    routeProps: getRouteProps('/users/create', CreateUser, true),
    breadCrumb: getBreadCrumb(userArr, 'Create', 'Create Users'),
    name: 'create-user',
    roles: ['admin'],
  },
  {
    routeProps: getRouteProps('/users/manage', ManageUser, true),
    breadCrumb: getBreadCrumb(userArr, 'Manage', 'Manage Users'),
    name: 'manage-user',
    roles: ['admin'],
  },
  {
    routeProps: getRouteProps('/users/stats', UserStats, true),
    breadCrumb: getBreadCrumb(userArr, 'Stats', 'User Stats'),
    name: 'user-stats',
    roles: ['admin'],
  },
  {
    routeProps: getRouteProps('/users', User, true),
    ...getSidebar('users', 'Users', 'users'),
    roles: ['admin', 'root'],
  },
  /**/
  {
    routeProps: getRouteProps('/profile', Profile),
    name: 'profile',
    text: 'Profile',
    roles: ['admin'],
  },
  {
    routeProps: getRouteProps('/404', NotFound),
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
