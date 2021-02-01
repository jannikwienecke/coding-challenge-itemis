import { screen } from "@testing-library/react"
import React from "react"
import { useCustomRender } from "utils/testUtils"
import { DEFAULT_INPUT_1 } from "../../constants"
import { DefaultList } from "./DefaultList"

test("should render default shopping items if tab is active", () => {
  const { globalState } = useCustomRender(
    <DefaultList itemList={DEFAULT_INPUT_1} isActive={true} />
  )

  expect(screen.getAllByRole("listitem").length).toBe(DEFAULT_INPUT_1.length)

  expect(globalState.current.shoppingList.shoppingItems.length).toBe(DEFAULT_INPUT_1.length)
})

test("should not render default shopping items if tab is inactive", () => {
  const testItem = "I am a test item"

  const { globalState } = useCustomRender(
    <DefaultList itemList={DEFAULT_INPUT_1} isActive={false} />
  )

  expect(screen.queryAllByRole("listitem").length).toBe(0)
})

test("should add the items to the shopping cart", () => {
  const { globalState } = useCustomRender(
    <DefaultList itemList={DEFAULT_INPUT_1} isActive={true} />
  )
  expect(globalState.current.shoppingList.shoppingItems.length).toBe(DEFAULT_INPUT_1.length)
})

test("should not add the items to the shopping cart if list is inactive", () => {
  const { globalState } = useCustomRender(
    <DefaultList itemList={DEFAULT_INPUT_1} isActive={false} />
  )
  expect(globalState.current.shoppingList.shoppingItems.length).toBe(0)
})
