import { useGlobalStore } from "hooks/useGlobalStore"
import React from "react"
import tw from "twin.macro"
import "./SideContent.css"

export const SideContent: React.FC = ({ children }) => {
  const [show, setShow] = React.useState<boolean | null>(null)
  const { shoppingList } = useGlobalStore()

  const Wrapper = tw.div` border-l-2 flex flex-col h-full`
  const showSideContent = shoppingList.shoppingItems.length > 0

  // if there is no delay - tab content will not update on the first click
  // when the basket is empty
  React.useEffect(() => {
    if (shoppingList.shoppingItems.length === 0) {
      if (show) setShow(false)
    } else if (!show) {
      setTimeout(() => {
        setShow(true)
      }, 10)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingList.shoppingItems])

  return (
    <Wrapper id="side-content" className={show ? "show" : "notShow"}>
      {children}
    </Wrapper>
  )
}
