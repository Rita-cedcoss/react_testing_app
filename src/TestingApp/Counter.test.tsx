import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { userInfo } from "os";
import Conter from "./Conter";
test("should render a counter with value of 1", () => {
  render(<Conter />);
  let renderCount = screen.getByTestId("count");
  expect(renderCount).toHaveTextContent("1");
});
test("should increase count when plus button is clicked and should decrease count when minus button is clicked", () => {
  render(<Conter />);
  let renderCount = screen.getByTestId("count");
  // increment test case
  let incrementby1 = screen.getByRole("button", { name: "+" });
  expect(renderCount).toHaveTextContent("1");
  userEvent.click(incrementby1);
  expect(renderCount).toHaveTextContent("2");
  // decrement test case
  let decrementby1 = screen.getByRole("button", { name: "-" });
  expect(renderCount).toHaveTextContent("2");
  userEvent.click(decrementby1);
  expect(renderCount).toHaveTextContent("1");
});
test("should not decrease to less than 1", () => {
  render(<Conter />);
  let renderCount = screen.getByTestId("count");
  let decrementby1 = screen.getByRole("button", { name: "-" });
  expect(renderCount).toHaveTextContent("1");
  userEvent.click(decrementby1);
  expect(renderCount).toHaveTextContent("1");
});
