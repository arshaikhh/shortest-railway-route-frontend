import { Button, Select, Typography } from "antd";
import { Option } from "antd/lib/mentions";
import axios from "axios";
import { useState } from "react";
import { baseURL } from "../utils/baseURL";
import ShortestComputedRoute from "../utils/interfaces";

interface Props {
  tracksList: string[];
}
const Title = Typography.Title;
function ShortestRoute(props: Props): JSX.Element {
  const [departureTrack, setDepartureTrack] = useState("");
  const [destinationTrack, setDestinationTrack] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [shortestRouteData, setShortestRouteData] =
    useState<ShortestComputedRoute | null>();

  async function fetchShortestRoute() {
    const res = await axios.get(
      baseURL + `shortestroute/${departureTrack}/${destinationTrack}`
    );
    setShortestRouteData(res.data);
    setIsVisible(true);
  }
  console.log(shortestRouteData);
  return (
    <div className="alignContent">
      <Title level={2}>Find Shortest Route</Title>
      <Select
        style={{ marginRight: "7px" }}
        placeholder="Please select departure track"
        showSearch={true}
        onSelect={(e: string) => {
          setDepartureTrack(e);
          setIsVisible(false);
        }}
        size="large"
      >
        {props.tracksList.map((track) => (
          <Option key={track} value={track}>
            {track}
          </Option>
        ))}
      </Select>

      <Select
        placeholder="Please select destination track"
        showSearch={true}
        onSelect={(e: string) => {
          setDestinationTrack(e);
          setIsVisible(false);
        }}
        size="large"
      >
        {props.tracksList.map((track) => (
          <Option key={track} value={track}>
            {track}
          </Option>
        ))}
      </Select>
      <br />
      <Button
        style={{ marginTop: "15px" }}
        type="primary"
        size="large"
        onClick={fetchShortestRoute}
      >
        Compute Shortest Route
      </Button>
      <br />
      <hr />
      {shortestRouteData?.path === null && isVisible ? (
        <Title level={4} type="danger">
          Sorry! No Route found from {departureTrack} to {destinationTrack}. The
          departure and destination location might be the same or the route
          doesn't exist. Please try another route.
        </Title>
      ) : shortestRouteData !== undefined && isVisible ? (
        <>
          <Title level={4}>
            Your shortest Route from {departureTrack} to {destinationTrack} is
            as follows
          </Title>
          <br />
          <Title level={5} underline={true}>
            Shortest Distance
          </Title>
          <Title level={5}>
            {shortestRouteData?.cost && shortestRouteData?.cost / 1000}
          </Title>
          <Title level={5} underline={true}>
            Number of Tracks{" "}
          </Title>
          <Title level={5}>{shortestRouteData?.trackLength}</Title>
          <Title level={5} underline={true}>
            Shortest Track Path
          </Title>
        </>
      ) : (
        <br />
      )}

      {shortestRouteData?.path === null && isVisible ? (
        <br />
      ) : (
        isVisible &&
        shortestRouteData?.path.map((path, idx) => (
          <div key={idx} className="routesContainer">
            {idx !== 0 && <span style={{ fontSize: "30px" }}>→</span>}
            <div className="routes">{path}</div>
          </div>
        ))
      )}
    </div>
  );
}
export default ShortestRoute;
