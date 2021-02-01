import { PRECISION_DIGITS } from "../constants"

export const add = (a: number, b: number) => {
  return Number((a + b).toFixed(PRECISION_DIGITS))
}

export const subtract = (a: number, b: number) => {
  return Number((a - b).toFixed(PRECISION_DIGITS))
}

export const round = (a: number) => {
  let numberString = a.toFixed(PRECISION_DIGITS)

  const lastDigit = Number(numberString[numberString.length - 1])

  if (lastDigit > 0 && lastDigit < 5) {
    numberString = numberString.slice(0, numberString.length - 1) + "5"
  }

  return Number(numberString)
}
