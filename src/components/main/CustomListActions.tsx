import { useGlobalStore } from "hooks/useGlobalStore"
import React from "react"
import tw from "twin.macro"

export const CustomListActions: React.FC<{ isLiked?: boolean; item: string }> = ({
  isLiked,
  item,
}) => {
  const { toggleFavorite, favorites, isFavorite } = useGlobalStore()
  const Wrapper = tw.div`h-full flex flex-row justify-center items-center`
  const Logo = tw.button`font-bold p-2 text-4xl text-black cursor-pointer focus:outline-none`

  return (
    <Wrapper>
      <Logo onClick={() => toggleFavorite(item)}>{isFavorite(item) ? "❤" : "🖤"}</Logo>
    </Wrapper>
  )
}
