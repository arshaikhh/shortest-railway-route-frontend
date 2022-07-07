import Home from "./components/Home";
import "antd/dist/antd.css";
import ShortestRoute from "./components/ShortestRoute";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "./utils/baseURL";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllStations from "./components/AllStations";
import PageHeader from "./components/Header";

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
          <Route
            path="/"
            element={
              <>
                <PageHeader headerKeys="0" />
                <Home />
              </>
            }
          />
          <Route
            path="/shortestroute"
            element={
              <>
                <PageHeader headerKeys="2" />
                <ShortestRoute tracksList={tracksList} />
              </>
            }
          />
          <Route
            path="/allstations"
            element={
              <>
                <PageHeader headerKeys="1" />
                <AllStations tracksList={tracksList} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
