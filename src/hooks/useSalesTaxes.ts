import React from "react"
import { ShoppingItem, ShoppingList } from "types"
import ShoppingItemAnalysis from "utils/ShoppingItemAnalysis"
import { add, subtract } from "utils/utils"
import {
  DEFAULT_SHOPPING_LIST,
  IMPORT_TAX,
  IS_IMPORTED,
  PRECISION_DIGITS,
  REGULAR_TAX,
} from "../constants"
import { useData } from "./useData"

export const useSalesTaxes = (shoppingItems: ShoppingItem[]) => {
  const [shoppingList, setShoppingList] = React.useState(DEFAULT_SHOPPING_LIST)
  const [error, setError] = React.useState("")

  const addShoppingItem = React.useCallback(
    (newItem: string) => {
      const runAnalysisOfNewItem = () => {
        const shoppingItemAnalysis = new ShoppingItemAnalysis(newItem, shoppingItems)

        try {
          shoppingItemAnalysis.runAnalysis()
        } catch (ShoppingItemAnalysisError) {
          setError(ShoppingItemAnalysisError.message)
          return null
        }

        if (!shoppingItemAnalysis.shoppingItem) {
          return null
        }

        return shoppingItemAnalysis
      }

      const addItemToList = (shoppingItemAnalysis: ShoppingItemAnalysis) => {
        setShoppingList((prevShoppingList) => {
          const netPrice = add(prevShoppingList.netPrice, shoppingItemAnalysis.netPrice!)
          const totalPrice = add(prevShoppingList.totalPrice, shoppingItemAnalysis.totalPrice!)
          const tax = add(prevShoppingList.tax, shoppingItemAnalysis.totalTax!)

          return {
            shoppingItems: [...prevShoppingList.shoppingItems, shoppingItemAnalysis.shoppingItem!],
            netPrice,
            tax,
            totalPrice,
          }
        })
      }

      const shoppingItemAnalysis = runAnalysisOfNewItem()

      if (!shoppingItemAnalysis) return null
      addItemToList(shoppingItemAnalysis)
    },
    [shoppingItems]
  )

  const resetShoppingList = React.useCallback(() => {
    setShoppingList(DEFAULT_SHOPPING_LIST)
  }, [])

  const removeShoppingItem = React.useCallback(
    (itemToRemove: string) => {
      const shoppingItemToRemove = shoppingList.shoppingItems.find(
        (shoppingItem) => shoppingItem.itemText === itemToRemove
      )
      if (!shoppingItemToRemove) return

      setShoppingList((prevShoppingList) => {
        const netPrice = subtract(prevShoppingList.netPrice, shoppingItemToRemove.netPrice!)
        const totalPrice = subtract(prevShoppingList.totalPrice, shoppingItemToRemove.totalPrice!)
        let tax = subtract(totalPrice, netPrice)

        return {
          shoppingItems: prevShoppingList.shoppingItems.filter(
            (shoppingItem) => shoppingItem.itemText !== itemToRemove
          ),
          netPrice,
          tax,
          totalPrice,
        }
      })
    },
    [shoppingList]
  )

  return { addShoppingItem, shoppingList, removeShoppingItem, resetShoppingList }
}
