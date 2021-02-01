import { screen, act } from "@testing-library/react"
import React from "react"
import { useCustomRender } from "utils/testUtils"
import { ProductSelection } from "./ProductSelection"

test("should toggle tab favorites", () => {
  const testItem = "test"
  const { globalState } = useCustomRender(<ProductSelection />)

  globalState.current.favorites = ["hello"]

  expect(screen.queryByText(/favorites/i)).not.toBeInTheDocument()

  act(() => {
    globalState.current.toggleFavorite(testItem)
  })

  expect(screen.getByRole("tab", { name: /favorites/i })).toBeInTheDocument()

  act(() => {
    globalState.current.toggleFavorite(testItem)
  })

  expect(screen.queryByText(/favorites/i)).not.toBeInTheDocument()
})
