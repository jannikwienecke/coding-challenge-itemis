import { screen, act } from "@testing-library/react"
import React from "react"
import { useCustomRender } from "utils/testUtils"
import { FavoriteList } from "./FavoriteList"

test("should render favorites in favorite tab", () => {
  const testItem = "I am a test item"

  const { globalState } = useCustomRender(<FavoriteList />)

  expect(screen.queryByText(testItem)).not.toBeInTheDocument()
  act(() => {
    globalState.current.toggleFavorite(testItem)
  })

  expect(screen.getByText(testItem)).toBeInTheDocument()
})
