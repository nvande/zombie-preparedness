import React from "react";
import { render, screen } from "@testing-library/react";
import IconList from "./IconList";

describe("IconList", () => {
  it("renders 'do-donot' type content correctly", () => {
    const content = {
      Do: ["Item 1", "Item 2"],
      DoNot: ["Item 3", "Item 4"]
    };
    render(
      <IconList 
        title="Do's and Don'ts"
        type="do-donot"
        content={content}
      />
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
    expect(screen.getByText("Item 4")).toBeInTheDocument();
    expect(screen.getAllByRole("img", { hidden: true })).toHaveLength(4);
  });

  it("renders default type content as list items", () => {
    const content = ["Item 1", "Item 2"];
    render(
      <IconList 
        title="List"
        content={content}
      />
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getAllByRole("img", { hidden: true })).toHaveLength(2);
  });

  it("displays an error message for invalid content type", () => {
    render(
      <IconList 
        title="Invalid List"
        content="This is a string, not an array or object."
      />
    );
    expect(screen.getByText("Invalid content type for the list.")).toBeInTheDocument();
  });

  it("includes attribution when source information is provided", () => {
    const content = ["Item 1"];
    render(
      <IconList 
        title="List with Attribution"
        content={content}
        sourceAuthor="Author Name"
        sourceTitle="Source Title"
      />
    );
    expect(screen.getByText("Author Name")).toBeInTheDocument();
    expect(screen.getByText("Source Title")).toBeInTheDocument();
  });
});
