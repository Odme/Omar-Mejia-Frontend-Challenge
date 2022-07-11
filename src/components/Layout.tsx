import routes from '../routes';
import Content from './Content';
import Navbar from './Navbar';
import Routing from './Routing';

const Layout = () => (
  <>
    <Navbar />
    <Content>
      <Routing routes={routes} />
    </Content>
  </>
);

export default Layout;
