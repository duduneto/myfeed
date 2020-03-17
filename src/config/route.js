import {
  Sc01b,
  Sc01c,
  Sc01,
  Sc02,
  Sc03,
  Sc05,
  Sc05b,
  Sc06,
  Sc06b,
  Sc06c,
  Sc07,
  Sc07b,
  Sc08,
  Sc08b,
  Sc09,
  Sc10,
  Sc11,
  Sc12,
  Sc12b,
  Sc12c,
  Sc13
} from '../screens';
import { AllPrivate, AllPublic } from './routeGroup';

export default {
  path: '/',
  name: 'All App',
  // prettier-ignore
  childRoutes: [
    { path: '/signin', name: 'Signin', component: Sc01, isIndex: true },
    { path: '/tempUsers', name: 'Temp Users', component: Sc01b },
    { path: '/terms', name: 'Terms', component: Sc01c },
    { path: '/onboarding', name: 'Onboarding', component: Sc02 },
    { path: '', name: 'All Private', component: AllPrivate, childRoutes: [
        { path: '/menus', name: 'Menus', component: Sc03 },
        { path: '/activityRegister', name: 'ActivityRegister', component: Sc05 },
        { path: '/activitysLists', name: 'ActivitysLists', component: Sc05b },
        { path: '/activityProfile', name: 'ActivityProfile', component: Sc06 },
        { path: '/editOpportunity', name: 'EditOpportunity', component: Sc06b },
        { path: '/editActivity', name: 'EditActivity', component: Sc06c },
        { path: '/reportsList', name: 'ReportsList', component: Sc07 },
        { path: '/filterOpp', name: 'ReportsList', component: Sc07b },
        { path: '/starsChart', name: 'StarsChart', component: Sc08 },
        { path: '/starsLists', name: 'StarsLists', component: Sc08b },
        { path: '/analysisKPI', name: 'AnalysisKPI', component: Sc09 },
        { path: '/soldLists', name: 'SoldLists', component: Sc10 },
        { path: '/soldListsCategory', name: 'SoldListsCategory', component: Sc11 },
        { path: '/addClients', name: 'AddClients', component: Sc12 },
        { path: '/clientsLists', name: 'ClientsLists', component: Sc12b },
        { path: '/editClient', name: 'ClientsLists', component: Sc12c },
        { path: '/search', name: 'ClientsLists', component: Sc13 },
      ]
    }
  ]
};
