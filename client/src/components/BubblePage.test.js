import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { getColorList as mockGetColorList } from "../api/getColorList";

const mockData = {
  data: [
    { color: "aliceblue", code: { hex: "#F0F8FF" }, id: 1 },
    { color: "limegreen", code: { hex: "#F0F8FF" }, id: 2 },
    { color: "aqua", code: { hex: "#F0F8FF" }, id: 3 },
    { color: "aquamarine", code: { hex: "#F0F8FF" }, id: 4 },
    { color: "lilac", code: { hex: "#F0F8FF" }, id: 5 },
  ],
};
jest.mock("../api/getColorList");

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  mockGetColorList.mockResolvedValueOnce(mockData);
  render(<BubblePage />);
});
