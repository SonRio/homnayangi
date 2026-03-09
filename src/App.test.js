import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("Example 1 renders successfully", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const element = screen.getByText(/Hôm nay ăn gì ngon ta?/i);

  expect(element).toBeInTheDocument();
});

test("Link Button Click, handle Called", async () => {
  const mockHandleClick = jest.fn();
  render(
    <BrowserRouter>
      <Home onClick={mockHandleClick} />
    </BrowserRouter>
  );

  await userEvent.click(screen.getByText(/Buổi Sáng/i));
  expect(mockHandleClick).toBeDefined();
});
