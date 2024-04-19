import React from "react";
import { render, screen } from "@testing-library/react";
import GraphicItemSection from "./GraphicItemSection";

describe("GraphicItemSection", () => {
  const mockItems = [
    {
      imageUrl: "path/to/image1.jpg",
      imageAlt: "Alt text 1",
      title: "Title 1",
      body: "Body text 1",
    },
    {
      imageUrl: "path/to/image2.jpg",
      imageAlt: "Alt text 2",
      title: "Title 2",
      body: "Body text 2",
    },
    {
      imageUrl: "path/to/image3.jpg",
      imageAlt: "Alt text 3",
      title: "Title 3",
      body: "Body text 3",
    },
    {
      imageUrl: "path/to/image4.jpg",
      imageAlt: "Alt text 4",
      title: "Title 4",
      body: "Body text 4",
    },
  ];

  it("renders correctly with an even number of items", () => {
    render(<GraphicItemSection items={mockItems} />);

    expect(screen.getAllByRole("img").length).toBe(4);
    expect(screen.getAllByText(/Title \d/).length).toBe(4);
    expect(screen.getAllByText(/Body text \d/).length).toBe(4);
  });

  it("correctly handles an odd number of items", () => {
    const oddMockItems = [
      ...mockItems,
      {
        imageUrl: "path/to/image5.jpg",
        imageAlt: "Alt text 5",
        title: "Title 5",
        body: "Body text 5",
      },
    ];
    render(<GraphicItemSection items={oddMockItems} />);

    expect(screen.getAllByRole("img").length).toBe(5);
    expect(screen.getByText("Title 5")).toBeInTheDocument();
  });

  it("should not render any items if the items array is empty", () => {
    render(<GraphicItemSection items={[]} />);

    expect(screen.queryByRole("img")).toBeNull();
  });
});
