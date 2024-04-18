import React from 'react';
import { createRoot, Root } from "react-dom/client";
import App from './App';

import { BrowserRouter } from "react-router-dom";

const Index = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");

if (rootElement) {
  const root: Root = createRoot(rootElement);
  root.render(<Index />);
} else {
  console.error('Failed to find the root element');
}
