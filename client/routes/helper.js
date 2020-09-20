import Dashboard from '../containers/dashboard';
import User from '../containers/user';
import CreateUser from '../containers/user/create';
import ManageUser from '../containers/user/manage';
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
import Library from '../containers/library';
import Notice from '../containers/notice';
import Payroll from '../containers/payroll';

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
  breadCrumb.push({label, title: `You are at ${pageName} page`});
  return breadCrumb;
};

const userAsParent = [{label: 'Users', path: '/users'}];

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
    ...getSidebar('attendance', 'Attendance', ['far', 'clock']),
    roles: ['admin', 'root'],
  },
  {
    routeProps: getRouteProps('/calendar', Calendar, true),
    ...getSidebar('calendar', 'Calendar', ['far', 'calendar-alt']),
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
  {
    routeProps: getRouteProps('/library', Library, true),
    ...getSidebar('library', 'Library', 'book-reader'),
    roles: ['admin', 'root'],
  },
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
    routeProps: getRouteProps('/users/manage', ManageUser, true),
    breadCrumb: getBreadCrumb(userAsParent, 'Manage', 'Manage Users'),
    name: 'manage-user',
    roles: ['admin'],
  },
  {
    routeProps: getRouteProps('/users/create', CreateUser, true),
    breadCrumb: getBreadCrumb(userAsParent, 'Manage', 'Manage Users'),
    name: 'create-user',
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
