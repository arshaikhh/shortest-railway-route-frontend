import { Button, Select } from "antd";
import { Option } from "antd/lib/mentions";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../utils/baseURL";

interface Props {
  tracksList: string[];
}

function ShortestRoute(props: Props): JSX.Element {
  const [departureTrack, setDepartureTrack] = useState("");
  const [destinationTrack, setDestinationTrack] = useState("");
  const [shortestRouteData, setShortestRouteData] = useState<any>();

  async function fetchShortestRoute() {
    const res = await axios.get(
      baseURL + departureTrack + `/${destinationTrack}`
    );
    setShortestRouteData(res.data);
  }
  return (
    <>
      <Select
        placeholder="Please select departure track"
        showSearch={true}
        onChange={(e) => setDepartureTrack(e.target.value)}
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
        onChange={(e) => setDestinationTrack(e.target.value)}
      >
        {props.tracksList.map((track) => (
          <Option key={track} value={track}>
            {track}
          </Option>
        ))}
      </Select>

      <Button onClick={fetchShortestRoute}>Compute Shortest Route</Button>
    </>
  );
}
export default ShortestRoute;
