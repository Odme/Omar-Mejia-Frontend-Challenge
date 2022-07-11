import { FC, lazy } from 'react';
import PATHS from '../app-contants/paths';

export interface AppRoute {
  path: string;
  name: string;
  index: boolean;
  Component: FC;
}

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Pairing = lazy(() => import('../pages/Pairing'));

const routes: Array<AppRoute> = [
  {
    path: PATHS.DASHBOARD,
    name: 'dashboard',
    index: true,
    Component: Dashboard,
  },
  {
    path: PATHS.PAIRING,
    name: 'pairing',
    index: false,
    Component: Pairing,
  },
];

export default routes;
