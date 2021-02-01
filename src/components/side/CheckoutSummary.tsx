import { useGlobalStore } from "hooks/useGlobalStore"
import React from "react"
import tw from "twin.macro"

export const CheckoutSummary: React.FC = () => {
  const CheckoutSummaryWrapper = tw.div`flex flex-col  h-full m-10 mr-14 ml-14`
  const CheckoutSummaryItem = tw.div`flex flex-row text-xl text-gray-600 mr-10 font-bold p-3`
  const CheckoutSummaryText = tw.div` flex-grow text-left`
  const CheckoutSummaryPrice = tw.div``

  const { shoppingList } = useGlobalStore()

  const { netPrice, totalPrice, tax } = shoppingList
  return (
    <CheckoutSummaryWrapper>
      <CheckoutSummaryItem>
        <CheckoutSummaryText>Subtotal</CheckoutSummaryText>
        <CheckoutSummaryPrice>
          <span id="net-price">{netPrice}</span> Euro
        </CheckoutSummaryPrice>
      </CheckoutSummaryItem>
      <CheckoutSummaryItem>
        <CheckoutSummaryText>Tax</CheckoutSummaryText>
        <CheckoutSummaryPrice>
          <span id="tax">{tax}</span> Euro
        </CheckoutSummaryPrice>
      </CheckoutSummaryItem>
      <CheckoutSummaryItem>
        <CheckoutSummaryText style={{ fontWeight: 800 }}>Subtotal</CheckoutSummaryText>
        <CheckoutSummaryPrice style={{ fontWeight: 800 }}>
          <span id="total-price">{totalPrice}</span> Euro
        </CheckoutSummaryPrice>
      </CheckoutSummaryItem>
    </CheckoutSummaryWrapper>
  )
}
