import { ShoppingList } from "types"
import chocolateBar from "./pubic/chocolate-bar.svg"
import giftChocolate from "./pubic/gift.svg"
import book from "./pubic/book.svg"
import musicCd from "./pubic/music-cd.svg"
import pills from "./pubic/pills.svg"
import perfume from "./pubic/perfume.svg"
export const REGULAR_TAX = 0.1

export const IMPORT_TAX = 0.05

export const IS_IMPORTED = "imported"

export const PRECISION_DIGITS = 2

export const DEFAULT_SHOPPING_LIST: ShoppingList = {
  shoppingItems: [],
  totalPrice: 0,
  tax: 0,
  netPrice: 0,
}

export const INPUT_OPTIONS: [string, string][] = [
  ["1 music CD at 14.99", musicCd],
  ["1 book at 12.49", book],
  ["1 chocolate bar at 0.85", chocolateBar],
  ["1 imported bottle of perfume at 47.50", perfume],
  ["1 imported box of chocolates at 10.00", giftChocolate],
  ["1 bottle of perfume at 18.99", perfume],
  ["1 packet of headache pills at 9.75", pills],
  ["1 box of imported chocolates at 11.25", giftChocolate],
]
export const DEFAULT_INPUT_1 = ["1 book at 12.49", "1 music CD at 14.99", "1 chocolate bar at 0.85"]
export const DEFAULT_INPUT_2 = [
  "1 imported box of chocolates at 10.00",
  "1 imported bottle of perfume at 47.50",
]
export const DEFAULT_INPUT_3 = [
  "1 imported bottle of perfume at 27.99",
  "1 bottle of perfume at 18.99",
  "1 packet of headache pills at 9.75",
  "1 box of imported chocolates at 11.25",
]

// export interface ShoppingList {
//   shoppingItems: ShoppingItem[]
//   netPrice: number
//   tax: number
//   totalPrice: number
// }

export const TEST_SHOPPING_CARD: ShoppingList = {
  shoppingItems: [
    { id: 1, name: "book", taxable: false, logoSrc: book, totalPrice: 50 },
    { id: 2, name: "music-cd", taxable: false, logoSrc: musicCd, totalPrice: 25 },
    { id: 3, name: "music-cd", taxable: false, logoSrc: chocolateBar, totalPrice: 40 },
    { id: 4, name: "music-cd", taxable: false, logoSrc: giftChocolate, totalPrice: 50 },
    { id: 5, name: "music-cd", taxable: false, logoSrc: pills, totalPrice: 50 },
  ],
  netPrice: 200,
  totalPrice: 300,
  tax: 100,
}
