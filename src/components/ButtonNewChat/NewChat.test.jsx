import React from "react"
import { render, screen } from "@testing-library/react"

import Button from "./NewChat"

describe("Button component", () => {
  it("renders correctly", () => {
    render(<Button />)
  })
  it("reders a text", () => {
    render(<Button text="ButtonNewText" />)
    const button = screen.getByText("ButtonNewText")
    expect(button).toBeInTheDocument()
  })
  it("renders a text with a color", () => {
    render(<Button text="ButtonNewText" textColor="red" />)
    const button = screen.getByText("ButtonNewText")
    expect(button).toHaveStyle({ color: "red" })
  })
  it("rederes a button has a svg", () => {
    render(<Button text="ButtonNewText" textColor="red" />)
    const svg = screen.getByTestId("newChatSvg")
    expect(svg).toBeInTheDocument()
  })
})
