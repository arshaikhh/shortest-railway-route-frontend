import Home from "./components/Home";
import "antd/dist/antd.css";
import ShortestRoute from "./components/ShortestRoute";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "./utils/baseURL";

function App(): JSX.Element {
  const [tracksList, setTracksList] = useState<string[]>([""]);

  useEffect(() => {
    const fetchTracksData = async () => {
      const res = await axios.get(baseURL + "allstations");
      setTracksList(res.data);
    };
    fetchTracksData();
  }, []);
  return (
    <>
      <Home />
      <ShortestRoute tracksList={tracksList} />
    </>
  );
}

export default App;
