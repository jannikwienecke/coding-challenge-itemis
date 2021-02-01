import React from "react"
import { getByRole, screen, within } from "@testing-library/react"
import App from "./App"
import { useCustomRender } from "utils/testUtils"
import { shoppingItems } from "dataset"
import { INPUT_OPTIONS } from "../constants"

test("renders application", () => {
  useCustomRender(<App />)
  const testElement = screen.getByText(/itemis/i)
  expect(testElement).toBeInTheDocument()
})

test("should be able to add a item to the basekt", () => {
  const { globalState } = useCustomRender(<App />)

  const itemText = "1 music CD at 14.99"

  const listItem = screen.getByText(itemText).closest("li")

  if (!listItem) throw new Error("TEST FAILED.")

  within(listItem).getByRole("button", { name: /add/i }).click()

  const shoppingCart = screen.getByText(/order summary/i).closest("div")

  if (!shoppingCart) throw new Error("TEST FAILED.")

  expect(within(shoppingCart).getByRole("listitem").textContent?.includes("music")).toBeTruthy()
})

test("should add the price if a item is added to the basket", () => {
  const { globalState } = useCustomRender(<App />)

  const itemText = "1 music CD at 14.99"

  const listItem = screen.getByText(itemText).closest("li")

  if (!listItem) throw new Error("TEST FAILED.")

  within(listItem).getByRole("button", { name: /add/i }).click()

  expect(screen.getByText("14.99")).toBeInTheDocument()
})
