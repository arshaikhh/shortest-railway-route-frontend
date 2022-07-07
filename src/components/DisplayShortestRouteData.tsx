import ShortestComputedRoute from "../utils/interfaces";
import { Typography } from "antd";

interface Props {
  shortestRouteData: ShortestComputedRoute | null | undefined;
  isVisible: boolean;
  departureTrack: string;
  destinationTrack: string;
}

function DisplayShortestRouteData(props: Props): JSX.Element {
  const Title = Typography.Title;
  return (
    <>
      {props.shortestRouteData?.path === null && props.isVisible ? (
        <Title level={4} type="danger">
          Sorry! No Route found from {props.departureTrack} to{" "}
          {props.destinationTrack}. The departure and destination location might
          be the same or the route doesn't exist. Please try another route.
        </Title>
      ) : props.shortestRouteData !== undefined && props.isVisible ? (
        <>
          <Title level={4}>
            Your shortest Route from {props.departureTrack} to{" "}
            {props.destinationTrack} is as follows
          </Title>
          <br />
          <Title level={5} underline={true}>
            Shortest Distance
          </Title>
          <Title level={5}>
            {props.shortestRouteData?.cost &&
              props.shortestRouteData?.cost / 1000}
          </Title>
          <Title level={5} underline={true}>
            Number of Tracks{" "}
          </Title>
          <Title level={5}>{props.shortestRouteData?.trackLength}</Title>
          <Title level={5} underline={true}>
            Shortest Track Path
          </Title>
        </>
      ) : (
        <br />
      )}

      {props.shortestRouteData?.path === null && props.isVisible ? (
        <br />
      ) : (
        props.isVisible &&
        props.shortestRouteData?.path.map((path, idx) => (
          <div key={idx} className="routesContainer">
            {idx !== 0 && <span style={{ fontSize: "30px" }}>→</span>}
            <div className="routes">{path}</div>
          </div>
        ))
      )}
    </>
  );
}
export default DisplayShortestRouteData;
