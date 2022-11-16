import { fireEvent, render, screen } from "@testing-library/react";

import AcceptButton from "./accept-button";

describe("AcceptButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AcceptButton />);
    expect(baseElement).toBeTruthy();
  });

  it("Should clicked button", () => {
    const handleClick = jest.fn();
    render(<AcceptButton onClick={handleClick} />);
    const acceptBtn = screen.getByTestId("accept-btn");
    fireEvent.click(acceptBtn);
    fireEvent.click(acceptBtn);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
