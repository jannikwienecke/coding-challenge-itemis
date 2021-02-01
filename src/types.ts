export interface ShoppingItem {
  id: number
  name: string
  taxable: boolean
  totalPrice?: number
  logoSrc: string
  itemText?: string
  netPrice?: number
}

export interface ShoppingList {
  shoppingItems: ShoppingItem[]
  netPrice: number
  tax: number
  totalPrice: number
}
