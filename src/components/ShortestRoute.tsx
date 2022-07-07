import { Button, Select, Typography } from "antd";
import { Option } from "antd/lib/mentions";
import axios from "axios";
import { useState } from "react";
import { baseURL } from "../utils/baseURL";
import ShortestComputedRoute from "../utils/interfaces";
import DisplayShortestRouteData from "./DisplayShortestRouteData";
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
    try {
      const res = await axios.get(
        baseURL + `shortestroute/${departureTrack}/${destinationTrack}`
      );
      setShortestRouteData(res.data);
      setIsVisible(true);
    } catch (error) {
      console.error(error);
    }
  }
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
      <DisplayShortestRouteData
        shortestRouteData={shortestRouteData}
        isVisible={isVisible}
        departureTrack={departureTrack}
        destinationTrack={destinationTrack}
      />
    </div>
  );
}
export default ShortestRoute;
