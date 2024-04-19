import React, { useEffect } from "react";
import { createRoot, Root } from "react-dom/client";
import App from "./App";

const Index = () => {
  useEffect(() => {
    document
      .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      .forEach((anchor: HTMLAnchorElement) => {
        anchor.addEventListener(
          "click",
          function (this: HTMLAnchorElement, e: MouseEvent) {
            e.preventDefault();

            const targetId: string | null = this.getAttribute("href");
            if (targetId) {
              const targetElement =
                document.querySelector<HTMLElement>(targetId);
              if (targetElement) {
                targetElement.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }
          }
        );
      });
  }, []);

  return <App />;
};

const rootElement = document.getElementById("root");

if (rootElement) {
  const root: Root = createRoot(rootElement);
  root.render(<Index />);
} else {
  console.error("Failed to find the root element");
}
