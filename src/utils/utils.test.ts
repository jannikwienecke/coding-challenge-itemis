import { round } from "./utils"
test("should round up correctly", () => {
  // 1.23 -> 1.25
  // 1.5 -> 1.5
  // 1.6 -> 1.6

  expect(round(1.5)).toBe(1.5)
  expect(round(1.86)).toBe(1.86)
  expect(round(6.66)).toBe(6.66)
})
