import { renderHook, act } from "@testing-library/react-hooks"
import { useSalesTaxes } from "./useSalesTaxes"
import { shoppingItems } from "../dataset"
test("should add item to shopping list", () => {
  const { result } = renderHook(() => useSalesTaxes(shoppingItems))

  // text does not matter
  const newItem = "1 imported box of chocolates at 10.00"

  act(() => {
    result.current.addShoppingItem(newItem)
  })

  expect(result.current.shoppingList.shoppingItems.length).toBe(1)
})

test("should have the correct total tax value in shopping list - cart 1", () => {
  // we have to add the regular tax and the import tax (both optional depending on the product)
  const { result } = renderHook(() => useSalesTaxes(shoppingItems))

  const item_1 = "1 book at 12.49"
  const item_2 = "1 music CD at 14.99"
  const item_3 = "1 chocolate bar at 0.85"

  act(() => {
    result.current.addShoppingItem(item_1)
    result.current.addShoppingItem(item_2)
    result.current.addShoppingItem(item_3)
  })

  expect(result.current.shoppingList.tax).toEqual(1.5)
})

test("should have the correct total tax value in shopping list - cart 2", () => {
  // we have to add the regular tax and the import tax (both optional depending on the product)
  const { result } = renderHook(() => useSalesTaxes(shoppingItems))

  const item_1 = "1 imported box of chocolates at 10.00"
  const item_2 = "1 imported bottle of perfume at 47.50"

  act(() => {
    result.current.addShoppingItem(item_1)
    result.current.addShoppingItem(item_2)
  })

  expect(result.current.shoppingList.tax).toEqual(7.65)
})

test("should have the correct total price - cart 1", () => {
  // we have to add the regular tax and the import tax (both optional depending on the product)
  const { result } = renderHook(() => useSalesTaxes(shoppingItems))

  const item_1 = "1 book at 12.49"
  const item_2 = "1 music CD at 14.99"
  const item_3 = "1 chocolate bar at 0.85"

  act(() => {
    result.current.addShoppingItem(item_1)
    result.current.addShoppingItem(item_2)
    result.current.addShoppingItem(item_3)
  })

  expect(result.current.shoppingList.tax).toEqual(1.5)
  expect(result.current.shoppingList.totalPrice).toEqual(29.83)
  expect(result.current.shoppingList.netPrice).toEqual(28.33)
})

test("should have the correct total price - cart 3", () => {
  // we have to add the regular tax and the import tax (both optional depending on the product)
  const { result } = renderHook(() => useSalesTaxes(shoppingItems))

  const item_1 = "1 imported bottle of perfume at 27.99"
  const item_2 = "1 bottle of perfume at 18.99"
  const item_3 = "1 packet of headache pills at 9.75"
  const item_4 = "1 box of imported chocolates at 11.25"

  act(() => {
    result.current.addShoppingItem(item_1)
    result.current.addShoppingItem(item_2)
    result.current.addShoppingItem(item_3)
    result.current.addShoppingItem(item_4)
  })

  // README SAYS 6.7 ---- WARNING VERIFY - REASON IITEM 4 box of chocolate
  expect(result.current.shoppingList.tax).toEqual(6.7)
  // README SAYS 74.68 ---- WARNING VERIFY - REASON IITEM 4 box of chocolate
  expect(result.current.shoppingList.totalPrice).toEqual(74.68)
})
