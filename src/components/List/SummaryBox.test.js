import React from "react";
import { render, screen } from "@testing-library/react";
import SummaryBox from "./SummaryBox";

describe("SummaryBox", () => {
  const heading = "Key Information";
  const items = [
    {
      beforeText: "Visit ",
      textLink: "our homepage",
      link: "/homepage",
      afterText: " for more details."
    },
    {
      beforeText: "Check out ",
      textLink: "our services",
      link: "/services",
      afterText: " page."
    }
  ];

  it("renders the heading and list items correctly", () => {
    render(<SummaryBox heading={heading} items={items} />);

    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();

    items.forEach((item) => {
      const firstItem = screen.getByText(item.beforeText.trim());
      expect(firstItem).toBeInTheDocument();

      const secondItem = screen.getByText(item.textLink);
      expect(secondItem).toBeInTheDocument();

      const thirdItem = screen.getByText(item.afterText.trim());
      expect(thirdItem).toBeInTheDocument();
      
      const link = screen.getByText(item.textLink);
      expect(link).toHaveAttribute("href", `${item.link}`);
    });
  });

  it("renders correctly with empty items", () => {
    const { container } = render(<SummaryBox heading={heading} items={[]} />);
    expect(container.querySelector("ul")).toBeEmptyDOMElement();
  });

  it("assigns the correct aria attributes", () => {
    render(<SummaryBox heading={heading} items={items} />);
    const summaryBox = screen.getByRole("region");
    expect(summaryBox).toHaveAttribute("aria-labelledby", "summary-box-key-information");
  });
});
