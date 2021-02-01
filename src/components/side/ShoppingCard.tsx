import { useGlobalStore } from "hooks/useGlobalStore"
import React from "react"
import tw from "twin.macro"
import { TEST_SHOPPING_CARD } from "../../constants"

export const ShoppingCard: React.FC = () => {
  const ShoppingList = tw.ul`border-b-2 h-full overflow-scroll`
  const ListItem = tw.li`list-none h-28 mt-3 mb-3 flex flex-row bg-gray-100 m-3 rounded-lg`
  const ShoppingCardLogoWrapper = tw.div` h-full flex justify-center flex-col w-1/3 items-center`
  const ShoppingCardLogo = tw.div`h-1/2`
  const ShoppingCardDescription = tw.div`flex-grow flex justify-center ml-4 flex-col items-start text-lg`
  const ShoppingCardItemName = tw.div``
  const ShoppingCardItemInfo = tw.div``

  const { shoppingList } = useGlobalStore()

  return (
    <ShoppingList>
      {shoppingList.shoppingItems.map((item) => {
        return (
          <ListItem key={item.id}>
            <ShoppingCardLogoWrapper>
              <ShoppingCardLogo>
                <img alt={item.name} src={item.logoSrc} style={{ height: "100%" }} />
              </ShoppingCardLogo>
            </ShoppingCardLogoWrapper>
            <ShoppingCardDescription>
              <ShoppingCardItemName>Product: {item.name}</ShoppingCardItemName>
              <ShoppingCardItemInfo>Total Price: {item.totalPrice} Euro</ShoppingCardItemInfo>
            </ShoppingCardDescription>
          </ListItem>
        )
      })}
    </ShoppingList>
  )
}
