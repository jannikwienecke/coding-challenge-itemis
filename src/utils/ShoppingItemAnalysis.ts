import { IMPORT_TAX, PRECISION_DIGITS, REGULAR_TAX, IS_IMPORTED } from "../constants"
import { ShoppingItem } from "types"
import { round } from "./utils"

interface Taxes {
  regularTax: number
  importTax: number
}

export class ShoppingItemAnalysisError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ShoppingItemAnalysisError"
  }
}

class ShoppingItemAnalysis {
  public shoppingItem: ShoppingItem | undefined
  public netPrice: number | undefined
  public totalPrice: number | undefined
  public totalTax: number | undefined
  public taxes: Taxes | undefined

  constructor(private itemText: string, private shoppingItems: ShoppingItem[]) {
    // STRUCTURE OF itemText:
    // [QUANTITY] [DESCRIPTION TEXT] [at] [price]
    this.itemText = itemText
    this.shoppingItems = shoppingItems
  }

  get isImported() {
    return this.itemText.includes(IS_IMPORTED)
  }

  runAnalysis() {
    this.setShoppingItem()
    this.setNetPrice()
    this.setTaxes()
    this.setTaxedPrice()
    this.setTotalTax()
  }

  raiseError(message: string) {
    throw new ShoppingItemAnalysisError(`${message}: ${this.itemText}`)
  }

  setShoppingItem = () => {
    // 1 Step:   Remove word imported - Remove amount (first text part)
    const arr = this.itemText.replace("imported ", "").split(" ").slice(1)
    // 2 Step: Remove everything starting from 'at' (after at comes the price)
    // the only thing that is left is the name of the item
    const indexOf_at = arr.indexOf("at")
    const nameOfShoppingItem = arr.slice(0, indexOf_at).join(" ")

    // Get the correct shopping item based on the name
    const shoppingItem = this.shoppingItems.find((item) => item.name === nameOfShoppingItem)

    if (!shoppingItem) {
      this.raiseError("DID NOT FIND SHOPPING ITEM")
      return
    }

    this.shoppingItem = { ...shoppingItem }
    this.shoppingItem.itemText = this.itemText

    if (this.netPrice) this.shoppingItem.netPrice = this.netPrice
  }

  setNetPrice = () => {
    const price = this.itemText.split(" ").pop()

    if (!price) {
      this.raiseError("DID NOT PRICE FROM NEW ITEM - ")
      return
    }

    this.netPrice = parseFloat(price)

    if (this.shoppingItem) this.shoppingItem.netPrice = this.netPrice
  }

  setTaxes = () => {
    if (!this.netPrice) {
      this.raiseError("Before setTaxes - you need to run 'setNetPrice'")
      return
    }
    // regular tax - 10%
    const regularTax = Number((this.netPrice * REGULAR_TAX).toFixed(PRECISION_DIGITS))
    // import tax - 5%
    const importTax = Number((this.netPrice * IMPORT_TAX).toFixed(PRECISION_DIGITS))

    this.taxes = { regularTax, importTax }
  }

  setTotalTax = () => {
    if (!this.totalPrice || !this.netPrice) {
      this.raiseError("Before setTotalTax - you need to run 'setNetPrice' and 'setTotalPrice'")
      return
    }

    this.totalTax = Number((this.totalPrice - this.netPrice).toFixed(PRECISION_DIGITS))
  }

  setTaxedPrice = () => {
    if (!this.taxes || !this.shoppingItem || !this.netPrice) {
      this.raiseError(
        "Before setTotalTax - you need to run 'setNetPrice' and 'setTotalPrice' and 'setShoppingItem'"
      )
      return
    }

    const { regularTax, importTax } = this.taxes

    const addRegularTax = this.shoppingItem.taxable
    const addImportTax = this.isImported

    let totalPrice = 0
    if (addRegularTax && addImportTax) {
      totalPrice = this.netPrice + regularTax + importTax
    } else if (addRegularTax) {
      totalPrice = this.netPrice + regularTax
    } else if (addImportTax) {
      totalPrice = this.netPrice + importTax
    } else {
      totalPrice = this.netPrice
    }

    // add all taxes - round to two digits - format back to number type
    this.totalPrice = round(totalPrice)
    this.shoppingItem.totalPrice = round(totalPrice)
  }
}

export default ShoppingItemAnalysis
