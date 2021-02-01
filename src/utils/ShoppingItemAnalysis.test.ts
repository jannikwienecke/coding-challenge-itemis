import "@testing-library/react-hooks"
import { shoppingItems } from "dataset"
import ShoppingItemAnalysis, { ShoppingItemAnalysisError } from "./ShoppingItemAnalysis"

test("should find shopping item based of then new item input text - book", () => {
  let newItem = "1 book at 12.49"
  let analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.setShoppingItem()
  expect(analysis.shoppingItem?.name).toBe("book")

  newItem = "1 bottle of perfume at 18.99"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.setShoppingItem()
  expect(analysis.shoppingItem?.name).toBe("bottle of perfume")

  newItem = "1 imported bottle of perfume at 47.50"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.setShoppingItem()
  expect(analysis.shoppingItem?.name).toBe("bottle of perfume")

  newItem = "1 chocolate bar at 0.85"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.setShoppingItem()
  expect(analysis.shoppingItem?.name).toBe("chocolate bar")

  newItem = "1 imported box of chocolates at 10.00"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.setShoppingItem()
  expect(analysis.shoppingItem?.name).toBe("box of chocolates")

  newItem = "1 box of imported chocolates at 11.25"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.setShoppingItem()
  expect(analysis.shoppingItem?.name).toBe("box of chocolates")
})

test("should find the correct net price", () => {
  let newItem = "1 box of imported chocolates at 11.25"
  let analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.setNetPrice()
  expect(analysis.netPrice).toBe(11.25)

  newItem = "1 box of imported chocolates at 18.99"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.setNetPrice()
  expect(analysis.netPrice).toBe(18.99)
})

test("should calculate the correct regular tax", () => {
  let newItem = "1 box of imported chocolates at 11.25"
  let analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.setNetPrice()
  analysis.setTaxes()
  expect(analysis.taxes?.regularTax).toBe(1.13)

  newItem = "1 box of imported chocolates at 20.5"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.setNetPrice()
  analysis.setTaxes()
  expect(analysis.taxes?.regularTax).toBe(2.05)
})

test("should calculate the correct import tax", () => {
  let newItem = "1 box of imported chocolates at 11.25"
  let analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.setNetPrice()
  analysis.setTaxes()
  expect(analysis.taxes?.importTax).toBe(0.56)

  newItem = "1 box of imported chocolates at 20.5"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.setNetPrice()
  analysis.setTaxes()
  expect(analysis.taxes?.importTax).toBe(1.03)
})

test("should calculate the correct taxed price", () => {
  // we have to add the regular tax and the import tax (both optional depending on the product)

  let newItem = "1 book at 12.49"
  let analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.runAnalysis()
  expect(analysis.totalPrice).toBe(12.49)

  newItem = "1 music CD at 14.99"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.runAnalysis()
  expect(analysis.totalPrice).toBe(16.49)

  newItem = "1 chocolate bar at 0.85"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.runAnalysis()
  expect(analysis.totalPrice).toBe(0.85)

  newItem = "1 imported box of chocolates at 10.00"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.runAnalysis()
  expect(analysis.totalPrice).toBe(10.5)

  newItem = "1 imported bottle of perfume at 27.99"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.runAnalysis()
  expect(analysis.totalPrice).toBe(32.19)

  newItem = "1 bottle of perfume at 18.99"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.runAnalysis()
  expect(analysis.totalPrice).toBe(20.89)

  newItem = "1 packet of headache pills at 9.75"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.runAnalysis()
  expect(analysis.totalPrice).toBe(9.75)

  // // WARNING README SAYS 11.85 --VERIFY
  newItem = "1 box of imported chocolates at 11.25"
  analysis = new ShoppingItemAnalysis(newItem, shoppingItems)
  analysis.runAnalysis()
  expect(analysis.totalPrice).toBe(11.85)
})

test("should raise custom class error - 1", () => {
  let newItem = "1 box of imported chocolates at 11.25"
  let analysis = new ShoppingItemAnalysis(newItem, shoppingItems)

  try {
    analysis.setTaxes()
  } catch (ShoppingItemAnalysisError: any) {
    expect(ShoppingItemAnalysisError.message).toBeTruthy()
  }
})

test("should raise custom class error - 2", () => {
  let newItem = "1 box of imported chocolates at 11.25"
  let analysis = new ShoppingItemAnalysis(newItem, shoppingItems)

  try {
    analysis.setTaxedPrice()
  } catch (ShoppingItemAnalysisError: any) {
    expect(ShoppingItemAnalysisError.message).toBeTruthy()
  }
})

test("should raise custom class error - no price", () => {
  let newItem = "1 box of imported chocolates at"
  let analysis = new ShoppingItemAnalysis(newItem, shoppingItems)

  try {
    analysis.setNetPrice()
  } catch (ShoppingItemAnalysisError: any) {
    expect(ShoppingItemAnalysisError.message).toBeTruthy()
  }
})
