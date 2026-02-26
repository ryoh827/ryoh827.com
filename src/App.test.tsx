import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders heading and links", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "ryoh827" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /SCRAPBOX/ })).toHaveAttribute(
      "href",
      "https://scrapbox.io/ryoh827-public/"
    );
    expect(screen.getByRole("link", { name: /GITHUB/ })).toHaveAttribute(
      "href",
      "https://github.com/ryoh827"
    );
    expect(screen.getByRole("link", { name: /> X$/ })).toHaveAttribute("href", "https://x.com/ryoh827");
    expect(screen.getByText("[COMING SOON...]")).toBeInTheDocument();
  });
});
