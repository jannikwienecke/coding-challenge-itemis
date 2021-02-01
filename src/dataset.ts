import { ShoppingItem } from "types"
import chocolateBar from "./pubic/chocolate-bar.svg"
import giftChocolate from "./pubic/gift.svg"
import book from "./pubic/book.svg"
import musicCd from "./pubic/music-cd.svg"
import pills from "./pubic/pills.svg"
import perfume from "./pubic/perfume.svg"

export const shoppingItems: ShoppingItem[] = [
  {
    id: 1,
    name: "book",
    taxable: false,
    logoSrc: book,
  },
  {
    id: 2,
    name: "music CD",
    taxable: true,
    logoSrc: musicCd,
  },
  {
    id: 3,
    name: "chocolate bar",
    taxable: false,
    logoSrc: chocolateBar,
  },
  {
    id: 4,
    name: "box of chocolates",
    taxable: false,
    logoSrc: giftChocolate,
  },
  {
    id: 5,
    name: "bottle of perfume",
    taxable: true,
    logoSrc: perfume,
  },
  {
    id: 6,
    name: "packet of headache pills",
    taxable: false,
    logoSrc: pills,
  },
]
