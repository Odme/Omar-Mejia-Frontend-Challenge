import { Link } from 'react-router-dom';
import PATHS from '../app-contants/paths';

const RouteNoMatch = () => (
  <div>
    <h2>Nothing to see here!</h2>
    <p>
      <Link to={PATHS.DASHBOARD}>Go to the home page</Link>
    </p>
  </div>
);

export default RouteNoMatch;
