import axios from "axios";
import { baseURL } from "./baseURL";
import ShortestComputedRoute from "./interfaces";

export async function fetchShortestRoute(
  departure: string,
  arrival: string
): Promise<ShortestComputedRoute> {
  const res = await axios.get(
    baseURL + `shortestroute/${departure}/${arrival}`
  );
  return res.data;
}
