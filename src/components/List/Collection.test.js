import React from "react";
import { render, screen } from "@testing-library/react";
import Collection from "./Collection";

describe("Collection", () => {
  const sampleData = {
    title: "Sample Collection",
    content: [
      {
        title: "First Item",
        link: "/first-item",
        description: "Description of the first item.",
        authors: ["Author One", "Author Two"],
        tags: ["Tag1", "Tag2"]
      },
      {
        title: "Second Item",
        link: "/second-item",
        description: "Description of the second item.",
        authors: ["Author Three"],
        tags: ["Tag3"]
      }
    ]
  };

  it("renders the component with a title and items", () => {
    render(<Collection {...sampleData} />);

    expect(screen.getByText("Sample Collection")).toBeInTheDocument();
    expect(screen.getByText("First Item")).toBeInTheDocument();
    expect(screen.getByText("Description of the first item.")).toBeInTheDocument();
    expect(screen.getByText("Author One")).toBeInTheDocument();
    expect(screen.getByText("Author Two")).toBeInTheDocument();
    expect(screen.getByText("Tag1")).toBeInTheDocument();
    expect(screen.getByText("Tag2")).toBeInTheDocument();
    expect(screen.getByText("Second Item")).toBeInTheDocument();
    expect(screen.getByText("Description of the second item.")).toBeInTheDocument();
    expect(screen.getByText("Author Three")).toBeInTheDocument();
    expect(screen.getByText("Tag3")).toBeInTheDocument();
  });

  it("renders items without optional fields when not provided", () => {
    const minimalData = {
      title: "Minimal Collection",
      content: [
        {
          title: "Minimal Item",
          link: "/minimal-item"
        }
      ]
    };

    render(<Collection {...minimalData} />);
    expect(screen.getByText("Minimal Collection")).toBeInTheDocument();
    expect(screen.getByText("Minimal Item")).toBeInTheDocument();
    expect(screen.queryByText("By")).not.toBeInTheDocument();
  });

  it("handles empty content array", () => {
    const emptyData = {
      title: "Empty Collection",
      content: []
    };

    render(<Collection {...emptyData} />);
    expect(screen.getByText("Empty Collection")).toBeInTheDocument();
    expect(screen.queryByText("Item")).not.toBeInTheDocument();
  });
});
