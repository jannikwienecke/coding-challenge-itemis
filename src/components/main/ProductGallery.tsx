import React from "react"
import { useData } from "hooks/useData"

export const ProductGallery = () => {
  const { shoppingItems } = useData()
  return (
    <ul>
      {shoppingItems.map((item) => {
        return <li>{item.name}</li>
      })}
    </ul>
  )
}
