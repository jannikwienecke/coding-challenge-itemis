import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CustomListActions } from "./CustomListActions"
import { DEFAULT_GLOBAL_STATE, GlobalStoreProvider } from "store/StateProvider"
import { GlobalStoreProps } from "../../store/StateProvider"
import { useCustomRender } from "utils/testUtils"
import { FavoriteList } from "./FavoriteList"

test("should add item to favorites and remove item from favorites", () => {
  const testItem = "I am a test item"

  const { globalState } = useCustomRender(<CustomListActions item={testItem} />)
  userEvent.click(screen.getByRole("button", { name: /🖤/i }))

  expect(globalState.current.favorites.length).toBe(1)
  expect(globalState.current.favorites[0]).toBe(testItem)

  userEvent.click(screen.getByRole("button", { name: /❤/i }))

  expect(globalState.current.favorites.length).toBe(0)
})
