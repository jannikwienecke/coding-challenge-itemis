import { DEFAULT_SHOPPING_LIST } from "../constants"
import { shoppingItems } from "dataset"
import { useSalesTaxes } from "hooks/useSalesTaxes"
import React from "react"
import { ShoppingItem, ShoppingList } from "types"
export interface GlobalStoreProps {
  favorites: string[]
  toggleFavorite: (item: string) => void
  isFavorite: (item: string) => boolean
  shoppingList: ShoppingList
  addShoppingItem: (newItem: string) => null | undefined
  removeShoppingItem: (itemToRemove: string) => void
  resetShoppingList: () => void
  // removeFromFavorites: (item: string) => void
}

export const DEFAULT_GLOBAL_STATE: GlobalStoreProps = {
  favorites: [],
  toggleFavorite: (item: string) => {},
  isFavorite: (item: string) => false,
  shoppingList: DEFAULT_SHOPPING_LIST,
  addShoppingItem: (newItem: string) => {
    return null
  },
  resetShoppingList: () => null,
  removeShoppingItem: (itemToRemove: string) => null,
}

export const GlobalContext = React.createContext<GlobalStoreProps>(DEFAULT_GLOBAL_STATE)

export const GlobalStoreProvider: React.FC = ({ children }) => {
  const { addShoppingItem, shoppingList, removeShoppingItem, resetShoppingList } = useSalesTaxes(
    shoppingItems
  )
  const [favorites, setFavorites] = React.useState<string[]>([])

  const toggleFavorite = React.useCallback(
    (item: string) => {
      setFavorites((prevFavorites: string[]) => {
        if (favorites.includes(item)) {
          return prevFavorites.filter((favorite) => favorite !== item)
        } else {
          return [...prevFavorites, item]
        }
      })
    },
    [favorites]
  )

  const isFavorite = React.useCallback((item: string) => favorites.includes(item), [favorites])

  const StoreValue = React.useMemo(() => {
    return {
      favorites,
      toggleFavorite,
      isFavorite,
      addShoppingItem,
      shoppingList,
      removeShoppingItem,
      resetShoppingList,
    }
  }, [
    favorites,
    toggleFavorite,
    isFavorite,
    addShoppingItem,
    shoppingList,
    removeShoppingItem,
    resetShoppingList,
  ])
  return <GlobalContext.Provider value={StoreValue}>{children}</GlobalContext.Provider>
}
