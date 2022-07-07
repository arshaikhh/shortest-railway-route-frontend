import { Typography, Input } from "antd";
import { Button } from "antd";

import { useState, useEffect } from "react";

interface Props {
  tracksList: string[];
}
const Title = Typography.Title;
function AllStations(props: Props): JSX.Element {
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState<string[]>([]);

  useEffect(() => setFilteredData(props.tracksList), [props.tracksList]);

  console.log(props.tracksList);
  console.log(filteredData);
  function filterData(filter: string) {
    setFilteredData(
      props.tracksList.filter(
        (track) => track.toLowerCase().indexOf(filter.toLowerCase()) === 0
      )
    );
    setFilter(filter);
  }

  return (
    <div className="alignContent">
      <Title level={2}>View All Stations</Title>
      <div>
        <Input
          style={{ marginLeft: "auto", marginRight: "auto", width: "35%" }}
          placeholder="Type in the station code to filter"
          value={filter}
          onChange={(e) => filterData(e.target.value)}
          size="large"
          width="50px"
          allowClear={true}
        />

        <Button
          onClick={() => filterData("")}
          size="large"
          type="primary"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          Clear Search
        </Button>
      </div>
      <br />
      <hr />
      {filteredData.map((track, idx) => (
        <div key={idx} className="allRoutes">
          {track}
        </div>
      ))}
    </div>
  );
}
export default AllStations;
