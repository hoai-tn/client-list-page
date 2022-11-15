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
    fireEvent.click(screen.getByTestId("accept-btn"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
