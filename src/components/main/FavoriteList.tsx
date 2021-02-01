import { useGlobalStore } from "hooks/useGlobalStore"
import React from "react"
import tw from "twin.macro"
import { Checkbox } from "./Checkbox"
import { CustomListActions } from "./CustomListActions"
// import "./DefaultList.css"

export const ListItem = tw.li`flex p-6 flex-row items-center border-b-2 `

export const FavoriteList: React.FC = () => {
  const { favorites } = useGlobalStore()
  const ItemWrapper = tw.div`flex-grow ml-10 text-2xl text-gray-600 font-bold`
  return (
    <ul className="">
      {favorites.map((favorite, index) => (
        <ListItem key={favorite + "_" + index}>
          <ItemWrapper>{favorite}</ItemWrapper>
          <CustomListActions item={favorite} />
        </ListItem>
      ))}
    </ul>
  )
}
