import { findByText } from "@testing-library/react"

describe("test cypress", () => {
  it("should render", () => {
    cy.visit("/")
    cy.contains("itemis")
  })
})

describe("test tab working correctly", () => {
  it("should render", () => {
    cy.visit("/")

    cy.findByRole("tab", {
      name: /shopping cart 1/i,
    }).click()

    // cy.

    cy.findByRole("tabpanel", {
      name: /shopping cart 1/i,
    }).within(() => {
      findByText(/1 book at 12.49/i)
    })

    cy.findByRole("tab", {
      name: /shopping cart 2/i,
    }).click()

    cy.findByRole("tabpanel", {
      name: /shopping cart 2/i,
    }).within(() => {
      findByText(/1 imported box of chocolates at 10.00/i)
    })

    cy.findByRole("tab", {
      name: /shopping cart 3/i,
    }).click()

    cy.findByRole("tabpanel", {
      name: /shopping cart 3/i,
    }).within(() => {
      findByText(/1 box of imported chocolates at 11.25/i)
    })

    cy.findByText(/74\.68/i)
    cy.findByText(/6\.7/i)

    cy.findAllByRole("button").first().click()

    cy.findByText(/39\.99/i)
    cy.findByText(/2\.5/i)

    cy.findByRole("tab", {
      name: /all items/i,
    }).click()

    cy.findByRole("tabpanel", {
      name: /all items/i,
    }).within(() => {
      cy.findByText(/1 music CD at 14.99/i)
      cy.findAllByRole("button", { name: /add/i }).first().click()
    })

    cy.findByText(/54\.98/i)
  })
})
