import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import { useCustomRender } from "utils/testUtils"
import { CustomListCounter } from "./CustomListCounter"

test("should increase the count in global store", () => {
  const testItem = "1 imported bottle of perfume at 27.99"

  const { globalState } = useCustomRender(<CustomListCounter item={testItem} />)

  userEvent.click(screen.getByRole("button", { name: /add/i }))

  expect(globalState.current.shoppingList.shoppingItems.length).toBe(1)
  expect(globalState.current.shoppingList.netPrice).toBe(27.99)

  userEvent.click(screen.getByRole("button", { name: /remove/i }))

  expect(globalState.current.shoppingList.shoppingItems.length).toBe(0)
  expect(globalState.current.shoppingList.netPrice).toBe(0)
})
