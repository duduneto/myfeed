import {
  Sc01b,
  Sc01c,
  Sc01,
  Sc02,
  Sc03,
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

      ]
    }
  ]
};
