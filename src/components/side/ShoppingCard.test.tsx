import { screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import { useCustomRender } from "utils/testUtils"
import { ShoppingCard } from "./ShoppingCard"

test("should render the correct items from shoppinglist", () => {
  const testItem = "1 imported bottle of perfume at 27.99"

  const { globalState } = useCustomRender(<ShoppingCard />)

  expect(screen.queryAllByRole("listitem").length).toBe(0)

  act(() => {
    globalState.current.addShoppingItem(testItem)
  })

  expect(screen.queryAllByRole("listitem").length).toBe(1)

  act(() => {
    globalState.current.removeShoppingItem(testItem)
  })

  expect(screen.queryAllByRole("listitem").length).toBe(0)
})
