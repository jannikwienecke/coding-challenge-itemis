import { useGlobalStore } from "hooks/useGlobalStore"
import React from "react"
import tw from "twin.macro"

export const CustomListCounter: React.FC<{ item: string }> = ({ item }) => {
  const { addShoppingItem, shoppingList, removeShoppingItem } = useGlobalStore()
  const Wrapper = tw.div`flex `
  const MinusButton = tw.button`pr-3 pl-3  w-24 rounded-md bg-gray-300 opacity-75 text-gray-700 font-bold`
  const PlusButton = tw.button`pr-3 pl-3 w-24 rounded-md bg-gray-300 opacity-75 text-red-700 font-bold`
  const Count = tw.div``

  const handleClickMinus = () => {
    removeShoppingItem(item)
  }
  const handleClickPlus = () => {
    addShoppingItem(item)
  }

  const isInBasket = shoppingList.shoppingItems.find(
    (shoppingItem) => shoppingItem.itemText === item
  )

  return (
    <Wrapper>
      {!isInBasket ? (
        <PlusButton onClick={handleClickPlus}>Add</PlusButton>
      ) : (
        <MinusButton onClick={handleClickMinus}>Remove</MinusButton>
      )}
    </Wrapper>
  )
}
