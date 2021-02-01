import React from "react"
import { Checkbox } from "./Checkbox"
import "./DefaultList.css"
import { ListItem } from "./FavoriteList"
import tw from "twin.macro"
import { useGlobalStore } from "hooks/useGlobalStore"
export const DefaultList: React.FC<{ itemList: string[]; isActive: boolean }> = ({
  itemList,
  isActive,
}) => {
  const ItemWrapper = tw.div`ml-4 text-2xl text-gray-600 font-bold`

  const { addShoppingItem, resetShoppingList, removeShoppingItem, shoppingList } = useGlobalStore()

  React.useEffect(() => {
    if (!isActive) return
    resetShoppingList()
    itemList.forEach((item) => {
      addShoppingItem(item)
    })
  }, [isActive, addShoppingItem, itemList, resetShoppingList])

  if (!isActive) return null
  return (
    <ul className="default-list">
      {itemList.map((item, index) => {
        const isInShoppingList = Boolean(
          shoppingList.shoppingItems.find((shoppingItem) => shoppingItem.itemText === item)
        )

        return (
          <ListItem key={item + "_" + index}>
            <Checkbox
              add={() => addShoppingItem(item)}
              remove={() => removeShoppingItem(item)}
              checked={isInShoppingList}
            />
            <ItemWrapper>{item}</ItemWrapper>
          </ListItem>
        )
      })}
    </ul>
  )
}
