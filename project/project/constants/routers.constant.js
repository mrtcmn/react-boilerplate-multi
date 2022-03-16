import { lazy } from 'react';

import i18n from '@f/utils/locale/i18n';

import HomepageView from '@f/views/Homepage.view';
import Route1 from '@f/components/Route1.jsx';
import Route2 from '@f/components/Route2.jsx';

const GetEnv = require('@envFile');

export let RouterPathsConst = {};

const CommonRouters = {
  root: '/',
};

if (GetEnv.PROJECT === 'PROJECT1') {
  RouterPathsConst = {
    ...CommonRouters,
    route1: `/${i18n.t('route_1')}`,
    route2: `/${i18n.t('route_2')}`,
  };
} else if (GetEnv.PROJECT === 'PROJECT2') {
  RouterPathsConst = {
    ...CommonRouters,
  };
} else {
  RouterPathsConst = {
    ...CommonRouters,
  };
}

export let ALL_ROUTES = {};
export const CommonAllRoutes = {};

if (GetEnv.PROJECT === 'PROJECT1') {
  ALL_ROUTES = {
    ...CommonAllRoutes,
    homepage: {
      route: RouterPathsConst.root,
      routeID: 'Homepage',
      component: () => HomepageView,
      name: i18n.t('route_home'),
      auth: false,
    },
    route1: {
      route: RouterPathsConst.route1,
      routeID: 'Route1',
      component: () => Route1,
      name: i18n.t('route_1'),
      auth: false,
    },
    route2: {
      route: RouterPathsConst.route2,
      routeID: 'Route2',
      component: () => Route2,
      name: i18n.t('route2'),
      auth: false,
    },
  };
} else if (GetEnv.PROJECT === 'PROJECT2') {
  ALL_ROUTES = {
    ...CommonAllRoutes,
    homepage: {
      route: RouterPathsConst.root,
      routeID: 'Homepage',
      component: () => HomepageView,
      name: i18n.t('route_home'),
      auth: false,
    },
  };
} else {
  ALL_ROUTES = {
    ...CommonAllRoutes,
    homepage: {
      route: RouterPathsConst.root,
      routeID: 'Homepage',
      component: () => HomepageView,
      name: i18n.t('route_home'),
      auth: false,
    },
  };
}
