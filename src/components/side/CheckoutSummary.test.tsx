import { screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import { useCustomRender } from "utils/testUtils"
import { CheckoutSummary } from "./CheckoutSummary"

test("should render the correct items from shoppinglist", () => {
  const testItem = "1 imported bottle of perfume at 27.99"

  const { globalState } = useCustomRender(<CheckoutSummary />)

  expect(screen.getAllByText(/0/i).length).toBe(3)

  act(() => {
    globalState.current.addShoppingItem(testItem)
  })

  const netPrice = globalState.current.shoppingList.netPrice

  expect(screen.getAllByText(netPrice).length).toBe(1)
  expect(screen.getAllByText(globalState.current.shoppingList.tax).length).toBe(1)
  expect(screen.getAllByText(globalState.current.shoppingList.totalPrice).length).toBe(1)

  act(() => {
    globalState.current.removeShoppingItem(testItem)
  })

  expect(screen.getAllByText(/0/i).length).toBe(3)
})
