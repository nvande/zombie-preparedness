import React, { useEffect } from "react";
import { createRoot, Root } from "react-dom/client";
import App from "./App";

const Index = () => {
  return <App />;
};

const rootElement = document.getElementById("root");

if (rootElement) {
  const root: Root = createRoot(rootElement);
  root.render(<Index />);
} else {
  console.error("Failed to find the root element");
}
