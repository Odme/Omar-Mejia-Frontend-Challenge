import { FC, Suspense } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import PATHS from '../app-contants/paths';
import { AppRoute } from '../routes';
import RouteNoMatch from './RouteNoMatch';

export interface RoutingProps {
  routes: Array<AppRoute>;
}

const Routing: FC<RoutingProps> = ({ routes }) => (
  <Router>
    <Routes>
      {routes.map(({ Component, index, path }) => (
        <Route
          key={path}
          index={index}
          path={path}
          element={(
            <Suspense fallback={<>...</>}>
              <Component />
            </Suspense>
        )}
        />
      ))}
      <Route
        path="/"
        element={<Navigate to={PATHS.DASHBOARD} replace />}
      />
      <Route path="*" element={<RouteNoMatch />} />
    </Routes>
  </Router>
);

export default Routing;
