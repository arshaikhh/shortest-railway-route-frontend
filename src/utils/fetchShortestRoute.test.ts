import { fetchShortestRoute } from "./fetchShortestRoute";

const firstTest = fetchShortestRoute("BERKHMD", "TRING");
const secondTest = fetchShortestRoute("BERKHMD", "HEMLHMP");
const thirdTest = fetchShortestRoute("DLTNN", "NORTONW");
const fourthTest = fetchShortestRoute("MNCRPIC", "CRDFCEN");
const fifthTest = fetchShortestRoute("THURSO", "PENZNCE");

test("first test result matches the result as given in the test result table", async () => {
  expect((await firstTest).cost).toBe(5994);
  expect((await firstTest).trackLength).toBe(1);
});

test("second test result matches the result as given in the test result table", async () => {
  expect((await secondTest).cost).toBe(5553);
  expect((await secondTest).trackLength).toBe(3);
});

test("third test result matches the result as given in the test result table", async () => {
  expect((await thirdTest).cost).toBe(22716);
  expect((await thirdTest).trackLength).toBe(13);
});

test("fourth test result matches the result as given in the test result table", async () => {
  expect((await fourthTest).cost).toBe(276677);
  expect((await fourthTest).trackLength).toBe(64);
});

test("fifth test result matches the result as given in the test result table", async () => {
  expect((await fifthTest).cost).toBe(1457246);
  expect((await fifthTest).trackLength).toBe(320);
});
