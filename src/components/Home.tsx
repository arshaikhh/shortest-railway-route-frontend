import { Typography } from "antd";
import { Button } from "antd";

import { Link } from "react-router-dom";

const Title = Typography.Title;

function Home(): JSX.Element {
  return (
    <div className="alignContent backgroundImage">
      <Title style={{ backgroundColor: "white", marginTop: "10px" }}>
        Welcome To Railway Route Finder
      </Title>
      <div style={{ marginTop: "15%" }}>
        <Title level={2} className="homePageText">
          What would you like to do
        </Title>
        <Link to="/allstations">
          <Button size="large" type="primary" style={{ borderRadius: "6px" }}>
            View All Stations
          </Button>
        </Link>{" "}
        <Link to="/shortestroute">
          <Button size="large" type="primary" style={{ borderRadius: "6px" }}>
            Find Shortest Route
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
