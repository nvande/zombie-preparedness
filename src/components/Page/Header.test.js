import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

const mockSections = [
  {
    label: "Home",
    link: "/",
    children: [
      { label: "Subhome 1", link: "/sub1" },
      { label: "Subhome 2", link: "/sub2" },
    ],
  },
  {
    label: "About",
    link: "/about",
  },
];

describe("Header", () => {
  const setup = (initialEntries = ["/"]) => {
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Header
          projectTitle="Test Project"
          logoImg="logo.png"
          sections={mockSections}
        />
      </MemoryRouter>
    );
  };

  it("renders without crashing", () => {
    setup();
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByAltText("Logo")).toHaveAttribute("src", "logo.png");
  });

  it("toggles visibility class on menu based on button click", () => {
    setup();
    const menuButton = screen.getByText("Menu");
    fireEvent.click(menuButton);

    expect(screen.getByRole("navigation")).toHaveClass("is-visible");
    fireEvent.click(menuButton);

    expect(screen.getByRole("navigation")).not.toHaveClass("is-visible");
  });

  it("displays the search bar correctly", () => {
    setup();

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("applies active class to current route", () => {
    setup(["/about"]);

    expect(screen.getByText("About").closest("a")).toHaveClass("usa-current");
  });
});
