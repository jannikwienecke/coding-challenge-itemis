import { useGlobalStore } from "hooks/useGlobalStore"
import React from "react"
import tw from "twin.macro"
import "./SideContent.css"

export const SideContent: React.FC = ({ children }) => {
  const { shoppingList } = useGlobalStore()

  const Wrapper = tw.div` border-l-2 flex flex-col h-full`
  const showSideContent = shoppingList.shoppingItems.length > 0

  return (
    <Wrapper id="side-content" className={showSideContent ? "show" : "notShow"}>
      {children}
    </Wrapper>
  )
}
