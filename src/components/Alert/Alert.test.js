import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Alert from "./Alert";

describe('Alert', () => {
  const setup = (initialPath = '/') => {
    const utils = render(
      <MemoryRouter initialEntries={[initialPath]}>
        <Routes>
          <Route path="*" element={
            <Alert
              type="emergency"
              heading="Emergency Alert"
              content="This is a test emergency alert."
              linkText="More Info"
              linkHref="/info"
            />
          }/>
        </Routes>
      </MemoryRouter>
    );
    return { ...utils };
  };

  it('should render the component with given props', () => {
    setup();
    expect(screen.getByText("Emergency Alert")).toBeInTheDocument();
    expect(screen.getByText("This is a test emergency alert.")).toBeInTheDocument();
    expect(screen.getByText("More Info")).toBeInTheDocument();
  });

  it('should apply correct classes based on props', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={
            <Alert
              type="success"
              isSlim={true}
              noIcon={true}
              content="Success message"
            />
          }/>
        </Routes>
      </MemoryRouter>
    );
    const alert = screen.getByText("Success message").parentNode.parentNode.parentNode;
    expect(alert).toHaveClass("usa-alert--success usa-alert--slim usa-alert--no-icon");
  });
});
