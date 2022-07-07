import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;
interface Props {
  headerKeys: string;
}

function PageHeader(props: Props): JSX.Element {
  return (
    <Header>
      <div />
      <Menu theme="dark" mode="horizontal" selectedKeys={[props.headerKeys]}>
        <Menu.Item key="0">
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="1">
          <Link to="/allstations">All Stations </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/shortestroute">Shortest Route</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default PageHeader;
