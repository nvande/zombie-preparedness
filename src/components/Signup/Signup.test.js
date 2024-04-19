import React from "react";
import { render, screen } from "@testing-library/react";
import Signup from "./Signup";

describe('Signup', () => {
  const mockFormConfig = {
    fields: [
      {
        id: "email",
        label: "Email address",
        type: "email",
        placeholder: "Enter your email"
      },
      {
        id: "interest",
        label: "Your Interests",
        type: "multi-select",
        options: [
          { value: "tech", label: "Technology" },
          { value: "health", label: "Health", disabled: false }
        ]
      }
    ],
    buttons: [
      { label: "Submit", onClick: jest.fn() }
    ]
  };

  const mockSidebarConfig = {
    title: "Learn More",
    content: [
      {
        text: "**Important**: Please read carefully."
      }
    ]
  };

  it('renders input elements according to formConfig', () => {
    render(<Signup formConfig={mockFormConfig} sidebarConfig={mockSidebarConfig} />);
    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
    expect(screen.getByLabelText("Technology")).toBeInTheDocument();
  });

  it('displays sidebar content correctly', () => {
    render(<Signup formConfig={mockFormConfig} sidebarConfig={mockSidebarConfig} />);
    expect(screen.getByText("Learn More")).toBeInTheDocument();
    expect(screen.getByText("Important")).toBeInTheDocument();
  });

  it('renders buttons from ButtonGroup', () => {
    render(<Signup formConfig={mockFormConfig} sidebarConfig={mockSidebarConfig} />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
