import Home from "./components/Home";
import "antd/dist/antd.css";
import ShortestRoute from "./components/ShortestRoute";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "./utils/baseURL";
import { Routes, Route, BrowserRouter } from "react-router-dom";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shortestroute"
            element={<ShortestRoute tracksList={tracksList} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
